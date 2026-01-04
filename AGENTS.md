# Next.js Base Project - Especificações

## Visão Geral
Sistema de gestão empresarial com múltiplos dashboards, PDV (Ponto de Venda) e relatórios, construído com Next.js 16, TypeScript e Radix UI.

## Stack Tecnológica

### Core
- **Next.js**: 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Package Manager**: pnpm

### UI Components
- **Radix UI**: Componentes primitivos (Avatar, Dialog, Dropdown, etc.)
- **Lucide React**: Ícones
- **Tabler Icons**: Ícones adicionais
- **Sonner**: Toast notifications
- **Recharts**: Gráficos e visualizações de dados
- **Tailwind CSS**: 4.x para estilização
- **tw-animate-css**: Animações Tailwind

### Funcionalidades
- **Dnd-Kit**: Drag and drop functionality
- **Next Themes**: Gerenciamento de temas (dark/light mode)
- **Zod**: Validação de schemas
- **Vaul**: Componentes de drawer
- **TanStack Table**: Tabelas avançadas

### DevTools
- **Biome**: Linting e formatação (2.2.0)
- **React Compiler**: Otimização automática (1.0.0)

## Estrutura do Projeto

```
src/
├── app/
│   ├── (home)/                  # Home page
│   ├── dashboard/               # Dashboard principal
│   │   ├── _components/
│   │   │   ├── app-sidebar/     # Sidebar de navegação
│   │   │   ├── header/          # Headers com breadcrumb
│   │   │   ├── panel/           # Componentes de relatórios
│   │   │   └── pdv/             # Componentes do PDV
│   │   └── report/              # Páginas de relatórios
│   │       ├── customers/
│   │       ├── products/
│   │       ├── sales/
│   │       └── panel/           # Relatório geral
│   ├── dashboard01/             # Dashboard alternativo
│   └── dashboard07/             # Dashboard alternativo
├── components/
│   ├── common/                  # Componentes comuns
│   ├── header/                  # Headers globais
│   ├── theme/                   # Gerenciamento de tema
│   └── ui/                      # Componentes shadcn/ui
├── hooks/                       # Custom hooks
└── lib/                         # Utilidades
```

## Funcionalidades Principais

### 1. PDV (Ponto de Venda)
**Localização**: `src/app/dashboard/page.tsx`

Componentes:
- **CustomerSection**: Gerenciamento de clientes
- **OrderItemsSection**: Adição de itens ao pedido
- **OrderSummary**: Resumo do pedido
- **PaymentMethods**: Formas de pagamento (Dinheiro, Crédito, Débito, Pix, Cheque)

### 2. Dashboard Principal
**Localização**: `src/app/dashboard01/page.tsx`

Características:
- Sidebar de navegação fixa
- Cards de métricas (SectionCards)
- Gráficos interativos (ChartAreaInteractive)
- Tabela de dados (DataTable)
- Header responsivo

### 3. Sistema de Relatórios

#### Relatório Geral (`report/panel/page.tsx`)
- Métricas agregadas
- Gráficos de tendência
- Tabela de dados detalhados

#### Relatórios Específicos
- **Clientes** (`report/customers/page.tsx`)
- **Produtos** (`report/products/page.tsx`)
- **Vendas** (`report/sales/page.tsx`)

### 4. Componentes UI

#### Sidebar
- Navegação principal
- Team switcher
- Menus de navegação hierárquicos
- Suporte a variantes (inset, floating)

#### Headers
- Breadcrumb navigation
- User menu
- Mode toggle (dark/light)

#### Tabelas
- Ordenação
- Filtros
- Paginação
- Responsive design

#### Cards
- Metrics display
- Status indicators
- Interactive elements

## Scripts Disponíveis

```json
{
  "dev": "next dev",           // Inicia servidor de desenvolvimento
  "build": "next build",       // Build de produção
  "start": "next start",       // Inicia servidor de produção
  "lint": "biome check",       // Verifica código com Biome
  "format": "npx biome format --write"  // Formata código
}
```

## Convenções de Código

### Linting & Formatação
- **Linter**: Biome (substituto do ESLint)
- **Formatador**: Biome (substituto do Prettier)
- Configuração: `biome.json`

### Estilo
- Componentes com Radix UI primitives
- Tailwind CSS para estilos
- TypeScript estrito
- React Server Components por padrão
- Client Components com "use client" apenas quando necessário

### Estrutura de Componentes
- Separação de componentes em sub-diretórios
- Nomes de componentes PascalCase
- Arquivos de componentes: `ComponentName.tsx`
- Arquivos de utilitários: `kebab-case.ts`

## Features Implementadas

### Temas
- Dark mode/Light mode com next-themes
- Persistência de preferência
- Transition suaves

### Responsividade
- Mobile-first design
- Tailwind responsive utilities
- Hooks customizados para detecção de mobile

### Performance
- React Compiler para otimização automática
- Server Components por padrão
- Dynamic imports quando necessário
- Otimização de bundle

## Próximos Passos Sugeridos

1. Implementar autenticação (referenciado em home page)
2. Conectar com backend API
3. Adicionar estados globais (Context/State management)
4. Implementar testes
5. Adicionar internacionalização (i18n)
6. Configurar CI/CD
7. Implementar PWA features
8. Adicionar error boundaries e monitoring

## Notas Importantes

- O projeto usa React Compiler 1.0.0, que otimiza automaticamente re-renders
- Tailwind CSS v4 está sendo usado, com PostCSS integrado
- Todos os componentes UI seguem o padrão shadcn/ui
- Biome é a ferramenta oficial de lint/format
- TypeScript configurado para modo estrito
