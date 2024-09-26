import { ChartArea, LayoutDashboard } from "lucide-react";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
};

export const dashboardNavbarLinks: MenuProps[] = [
  {
    id: 0,
    label: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/dashboard",
  },
  {
    id: 1,
    label: "Analytics",
    icon: <ChartArea />,
    path: "/dashboard/analytics",
  },
];
