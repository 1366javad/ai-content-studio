"use server";

import { createClient } from "@/app/lib/supabase/server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",

    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  redirect(data.url);
}

export async function signUpWithEmail(formData) {
  const supabase = await createClient();

  const email = formData.get("email");

  const password = formData.get("password");

  const fullName = formData.get("fullName");

  const { error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        full_name: fullName,
      },

      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: "Check your email to confirm your account.",
  };
}

export async function signInWithEmail(formData) {
  const supabase = await createClient();

  const email = formData.get("email");

  const password = formData.get("password");

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/", "layout");

  redirect("/dashboard");
}

export async function sendResetPasswordEmail(formData) {
  const supabase = await createClient();

  const email = formData.get("email");

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/update-password`,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function updatePassword(formData) {
  const supabase = await createClient();

  const password = formData.get("password");

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function signOutAction() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");

  redirect("/");
}
