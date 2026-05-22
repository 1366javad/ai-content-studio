"use server";

import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

// 1. sign in with google
export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });
  if (error) throw error;
  return redirect(data.url);
}

// 2. sign up with email and password
export async function signUpWithEmail(formData) {
  const supabase = await createClient();
  const email = formData.get("email");
  const password = formData.get("password");
  const fullName = formData.get("fullName");

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });

  if (error) return { error: error.message };
  return {
    success:
      "Registration successful! Please check your email for confirmation.",
  };
}

// 3. sign in with email and password
export async function signInWithEmail(formData) {
  const supabase = await createClient();
  const email = formData.get("email");
  const password = formData.get("password");

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  redirect("/dashboard");
}

// 4. reset password
export async function sendResetPasswordEmail(formData) {
  const email = formData.get("email");

  const supabase = await createClient();

  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/update-password`;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

  if (error) {
    console.log("Forgot password error:", error.message);
    return { error: error.message };
  }

  return { success: true };
}

// 5. update password
export async function updatePassword(formData) {
  const password = formData.get("password");

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

// .6 sign out
export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return { success: true };
}
