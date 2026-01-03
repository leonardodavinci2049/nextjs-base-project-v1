import {
  BarChart3,
  ClipboardList,
  LogOut,
  Menu,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: ShoppingCart, label: "Nova Venda", href: "#" },
  { icon: ClipboardList, label: "Últimos Pedidos", href: "#" },
  { icon: Users, label: "Clientes", href: "#" },
  { icon: BarChart3, label: "Relatórios", href: "#" },
  { icon: Settings, label: "Configurações", href: "#" },
  { icon: LogOut, label: "Sair", href: "#" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-sidebar-foreground">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold text-sidebar-foreground">
          PDV Menu
        </h1>
      </div>

      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent mb-1"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
