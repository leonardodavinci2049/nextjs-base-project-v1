import { SiteHeaderWithBreadcrumb } from "@/app/dashboard/header/site-header-with-breadcrumb";

export default function PanelPage() {
  return (
    <>
      <SiteHeaderWithBreadcrumb
        title="Painel"
        breadcrumbItems={[
          { label: "Relatórios", href: "#" },
          { label: "Painel", isActive: true },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Painel de Relatórios
          </h2>
          <p className="text-muted-foreground">
            Informações (ainda não implementada)
          </p>
        </div>
      </div>
    </>
  );
}
