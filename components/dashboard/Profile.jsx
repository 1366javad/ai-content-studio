"use client";

import UserMenu from "@/components/ui/user-menu";
import { useUser } from "@/hooks/useUser";
function Profile() {
  const { profile, loading } = useUser();

  if (loading) return <p>User</p>;
  const fullName = profile?.full_name;

  const initials = fullName ? fullName.charAt(0).toUpperCase() : "U";
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-muted-foreground hidden sm:block">
        {fullName || "User"}
      </span>
      <div className=" relative">
        <UserMenu initials={initials} />
      </div>
    </div>
  );
}

export default Profile;
