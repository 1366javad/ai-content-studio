import { getUserAndProfile } from "@/app/lib/db/getUserData";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const { user, profile } = await getUserAndProfile();

  return <NavbarClient user={user} profile={profile} />;
}
