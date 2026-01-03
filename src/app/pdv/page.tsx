import { CustomerSection } from "./components/customer-section";
import { Header } from "./components/header";
import { OrderItemsSection } from "./components/order-items-section";
import { OrderSummary } from "./components/order-summary";
import { Sidebar } from "./components/sidebar";

export default function POSPage() {
  return (
    <div className="flex h-screen bg-background dark">
      <Sidebar />

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
  );
}
