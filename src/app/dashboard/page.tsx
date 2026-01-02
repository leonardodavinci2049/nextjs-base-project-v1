import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar/app-sidebar";
import { SiteHeaderWithBreadcrumb } from "./header/site-header-with-breadcrumb";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeaderWithBreadcrumb
          title="Dashboard"
          breadcrumbItems={[
            { label: "Dashboard", href: "#" },
            { label: "Analytics", isActive: true },
          ]}
        />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
