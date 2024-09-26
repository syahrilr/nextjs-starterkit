import { redirect } from "next/navigation";

const SettingsPage = () => {
  return redirect("/dashboard/settings/profile");
};

export default SettingsPage;
