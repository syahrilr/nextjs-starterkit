import DashboardAside from "./_components/dashboard-aside";
import DashboardNavbar from "./_components/dashboard-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardAside />
      <div className="flex flex-col sm:gap-4 sm:pl-14">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
