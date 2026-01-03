import { CustomerSection } from "../pdv/components/customer-section";
import { Header } from "../pdv/components/header";
import { OrderItemsSection } from "../pdv/components/order-items-section";
import { OrderSummary } from "../pdv/components/order-summary";
import { SiteHeaderWithBreadcrumb } from "./_components/header/site-header-with-breadcrumb";

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
      <div className="flex h-screen bg-background">
        <div className="flex flex-1 flex-col">
          <Header />

          <div className="flex flex-1 flex-col md:flex-row gap-4 p-4 overflow-auto md:overflow-hidden">
            <main className="flex-1 flex flex-col gap-4 md:overflow-auto">
              <CustomerSection />
              <OrderItemsSection />
            </main>

            <aside className="w-full md:w-96 shrink-0">
              <OrderSummary />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
