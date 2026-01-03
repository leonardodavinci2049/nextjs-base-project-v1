import { CustomerSection } from "../pdv/components/customer-section";
import { Header } from "../pdv/components/header";
import { OrderItemsSection } from "../pdv/components/order-items-section";
import { OrderSummary } from "../pdv/components/order-summary";
import { SiteHeaderWithBreadcrumb } from "./header/site-header-with-breadcrumb";

export default function DashboardPage() {
  return (
    <>
      <SiteHeaderWithBreadcrumb
        title="Dashboard"
        breadcrumbItems={[
          { label: "Dashboard", href: "#" },
          { label: "Analytics", isActive: true },
        ]}
      />
    <div className="flex h-screen bg-background dark">
      

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 gap-4 p-4 overflow-hidden">
          <main className="flex-1 flex flex-col gap-4 overflow-auto">
            <CustomerSection />
            <OrderItemsSection />
          </main>

          <aside className="w-96">
            <OrderSummary />
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}
