# Structure

```
src/
├─ app/
│   ├─ App.jsx
│   ├─ main.jsx
│   └─ routes/
│       ├─ index.jsx
│       ├─ public.routes.jsx
│       ├─ private.routes.jsx
│       └─ admin.routes.jsx
│
├─ layouts/
│   ├─ PublicLayout.jsx
│   ├─ AppLayout.jsx
│   └─ AdminLayout.jsx
│
├─ features/
│   ├─ auth/
│   │   ├─ pages/
│   │   │   ├─ Login.jsx
│   │   │   └─ Register.jsx
│   │   ├─ components/
│   │   │   └─ AuthForm.jsx
│   │   ├─ hooks/
│   │   │   └─ useAuth.js
│   │   ├─ context/
│   │   │   └─ AuthContext.jsx
│   │   ├─ services/
│   │   │   └─ auth.api.js
│   │   └─ mock/
│   │       └─ auth.mock.js
│   │
│   ├─ shop/
│   │   ├─ pages/
│   │   │   ├─ Product.jsx
│   │   │   └─ Checkout.jsx
│   │   ├─ components/
│   │   │   ├─ ProductCard.jsx
│   │   │   └─ CartSummary.jsx
│   │   ├─ services/
│   │   │   └─ products.api.js
│   │   └─ mock/
│   │       └─ products.mock.js
│   │
│   ├─ dashboard/
│   │   ├─ pages/
│   │   │   ├─ Dashboard.jsx
│   │   │   └─ Orders.jsx
│   │   ├─ components/
│   │   └─ services/
│   │
│   └─ admin/
│       ├─ pages/
│       │   └─ AdminPanel.jsx
│       └─ services/
│
├─ shared/
│   ├─ components/
│   │   ├─ Loader.jsx
│   │   ├─ Modal.jsx
│   │   └─ Button.jsx
│   ├─ hooks/
│   │   └─ useDebounce.js
│   ├─ utils/
│   │   └─ formatDate.js
│   └─ constants/
│       └─ routes.js
│
├─ assets/
│   ├─ images/
│   ├─ icons/
│   └─ styles/
│
└─ index.css

```
