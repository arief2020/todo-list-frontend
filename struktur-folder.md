struktur folder
```
/app
  /dashboard
    /[userId]
      page.tsx
      layout.tsx
      loading.tsx
      error.tsx
      components/         # Komponen khusus route ini
  /auth
    login/
    register/
  layout.tsx               # Root layout
  page.tsx                 # Homepage
  globals.css              # Global CSS

/components                # Reusable UI (Button, Input, Modal)
/features                  # Modularisasi fitur (Auth, Product, etc.)
  /auth
    LoginForm.tsx
    RegisterForm.tsx
    auth.service.ts        # API call khusus auth
  /product
    ProductList.tsx
    product.service.ts     # API call produk
/lib
  fetcher.ts               # Helper fetch API (misal pake Axios/SWR)
  formatDate.ts
/hooks
  useAuth.ts
  useProduct.ts
/types
  user.ts
  product.ts
/constants
  routes.ts
  roles.ts
/styles
  tailwind.config.ts
  theme.css
/public
  logo.png
  icons/
/middleware.ts             # (opsional) auth redirect
/tsconfig.json
/next.config.js
```