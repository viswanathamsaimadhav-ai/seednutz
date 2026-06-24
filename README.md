# Seednutz — Source Code Export

A well-structured export of the entire Seednutz application source code.

**Generated:** 6/24/2026

**Total files:** 97

---

## Project Structure

```
project-export/
├── 01-config/  # Configuration & Entry Points
│   ├── index.css
│   ├── main.jsx
├── 02-core/  # Application Core
│   ├── App.jsx
├── 04-lib/  # Library & Utilities
│   ├── lib/app-params.js
│   ├── lib/AuthContext.jsx
│   ├── lib/CartContext.jsx
│   ├── lib/PageNotFound.jsx
│   ├── lib/query-client.js
│   ├── lib/utils.js
├── 05-api/  # API Clients
│   ├── api/base44Client.js
├── 06-hooks/  # Custom Hooks
│   ├── hooks/use-mobile.jsx
├── 07-components/  # UI Components
│   ├── components/AdminGuard.jsx
│   ├── components/AuthLayout.jsx
│   ├── components/GoogleIcon.jsx
│   ├── components/home/BrandStory.jsx
│   ├── components/home/CTASection.jsx
│   ├── components/home/FeaturedCategories.jsx
│   ├── components/home/HeroSection.jsx
│   ├── components/home/ProductHighlights.jsx
│   ├── components/home/TrustIndicators.jsx
│   ├── components/layout/Footer.jsx
│   ├── components/layout/Navbar.jsx
│   ├── components/layout/SiteLayout.jsx
│   ├── components/products/FilterEngine.jsx
│   ├── components/products/IngredientMap.jsx
│   ├── components/products/NutritionPanel.jsx
│   ├── components/products/ProductCard.jsx
│   ├── components/products/SearchBar.jsx
│   ├── components/ProtectedRoute.jsx
│   ├── components/ScrollToTop.jsx
│   ├── components/ui/accordion.jsx
│   ├── components/ui/alert-dialog.jsx
│   ├── components/ui/alert.jsx
│   ├── components/ui/aspect-ratio.jsx
│   ├── components/ui/avatar.jsx
│   ├── components/ui/badge.jsx
│   ├── components/ui/breadcrumb.jsx
│   ├── components/ui/button.jsx
│   ├── components/ui/calendar.jsx
│   ├── components/ui/card.jsx
│   ├── components/ui/carousel.jsx
│   ├── components/ui/chart.jsx
│   ├── components/ui/checkbox.jsx
│   ├── components/ui/collapsible.jsx
│   ├── components/ui/command.jsx
│   ├── components/ui/context-menu.jsx
│   ├── components/ui/dialog.jsx
│   ├── components/ui/drawer.jsx
│   ├── components/ui/dropdown-menu.jsx
│   ├── components/ui/form.jsx
│   ├── components/ui/hover-card.jsx
│   ├── components/ui/input-otp.jsx
│   ├── components/ui/input.jsx
│   ├── components/ui/label.jsx
│   ├── components/ui/menubar.jsx
│   ├── components/ui/navigation-menu.jsx
│   ├── components/ui/pagination.jsx
│   ├── components/ui/popover.jsx
│   ├── components/ui/progress.jsx
│   ├── components/ui/radio-group.jsx
│   ├── components/ui/resizable.jsx
│   ├── components/ui/scroll-area.jsx
│   ├── components/ui/select.jsx
│   ├── components/ui/separator.jsx
│   ├── components/ui/sheet.jsx
│   ├── components/ui/sidebar.jsx
│   ├── components/ui/skeleton.jsx
│   ├── components/ui/slider.jsx
│   ├── components/ui/sonner.jsx
│   ├── components/ui/switch.jsx
│   ├── components/ui/table.jsx
│   ├── components/ui/tabs.jsx
│   ├── components/ui/textarea.jsx
│   ├── components/ui/toast.jsx
│   ├── components/ui/toaster.jsx
│   ├── components/ui/toggle-group.jsx
│   ├── components/ui/toggle.jsx
│   ├── components/ui/tooltip.jsx
│   ├── components/ui/use-toast.jsx
│   ├── components/UserNotRegisteredError.jsx
├── 08-pages/  # Pages
│   ├── pages/About.jsx
│   ├── pages/AdminLogin.jsx
│   ├── pages/Cart.jsx
│   ├── pages/Checkout.jsx
│   ├── pages/Contact.jsx
│   ├── pages/ForgotPassword.jsx
│   ├── pages/Home.jsx
│   ├── pages/Login.jsx
│   ├── pages/ProductDetail.jsx
│   ├── pages/Products.jsx
│   ├── pages/Register.jsx
│   ├── pages/ResetPassword.jsx
├── 09-docs/  # Documentation
│   ├── docs/API.md
│   ├── docs/COMPONENTS.md
│   ├── docs/DATABASE_SCRIPTS.md
│   ├── docs/UI_DESIGN.md
├── 10-docs/  # Documentation
│   ├── DOCUMENTATION.md
└── README.md  # this file
```

---

## File Index

### Configuration & Entry Points

| # | File |
|---|------|
| 1 | `01-config/index.css` |
| 2 | `01-config/main.jsx` |

### Application Core

| # | File |
|---|------|
| 1 | `02-core/App.jsx` |

### Library & Utilities

| # | File |
|---|------|
| 1 | `04-lib/lib/app-params.js` |
| 2 | `04-lib/lib/AuthContext.jsx` |
| 3 | `04-lib/lib/CartContext.jsx` |
| 4 | `04-lib/lib/PageNotFound.jsx` |
| 5 | `04-lib/lib/query-client.js` |
| 6 | `04-lib/lib/utils.js` |

### API Clients

| # | File |
|---|------|
| 1 | `05-api/api/base44Client.js` |

### Custom Hooks

| # | File |
|---|------|
| 1 | `06-hooks/hooks/use-mobile.jsx` |

### UI Components

| # | File |
|---|------|
| 1 | `07-components/components/AdminGuard.jsx` |
| 2 | `07-components/components/AuthLayout.jsx` |
| 3 | `07-components/components/GoogleIcon.jsx` |
| 4 | `07-components/components/home/BrandStory.jsx` |
| 5 | `07-components/components/home/CTASection.jsx` |
| 6 | `07-components/components/home/FeaturedCategories.jsx` |
| 7 | `07-components/components/home/HeroSection.jsx` |
| 8 | `07-components/components/home/ProductHighlights.jsx` |
| 9 | `07-components/components/home/TrustIndicators.jsx` |
| 10 | `07-components/components/layout/Footer.jsx` |
| 11 | `07-components/components/layout/Navbar.jsx` |
| 12 | `07-components/components/layout/SiteLayout.jsx` |
| 13 | `07-components/components/products/FilterEngine.jsx` |
| 14 | `07-components/components/products/IngredientMap.jsx` |
| 15 | `07-components/components/products/NutritionPanel.jsx` |
| 16 | `07-components/components/products/ProductCard.jsx` |
| 17 | `07-components/components/products/SearchBar.jsx` |
| 18 | `07-components/components/ProtectedRoute.jsx` |
| 19 | `07-components/components/ScrollToTop.jsx` |
| 20 | `07-components/components/ui/accordion.jsx` |
| 21 | `07-components/components/ui/alert-dialog.jsx` |
| 22 | `07-components/components/ui/alert.jsx` |
| 23 | `07-components/components/ui/aspect-ratio.jsx` |
| 24 | `07-components/components/ui/avatar.jsx` |
| 25 | `07-components/components/ui/badge.jsx` |
| 26 | `07-components/components/ui/breadcrumb.jsx` |
| 27 | `07-components/components/ui/button.jsx` |
| 28 | `07-components/components/ui/calendar.jsx` |
| 29 | `07-components/components/ui/card.jsx` |
| 30 | `07-components/components/ui/carousel.jsx` |
| 31 | `07-components/components/ui/chart.jsx` |
| 32 | `07-components/components/ui/checkbox.jsx` |
| 33 | `07-components/components/ui/collapsible.jsx` |
| 34 | `07-components/components/ui/command.jsx` |
| 35 | `07-components/components/ui/context-menu.jsx` |
| 36 | `07-components/components/ui/dialog.jsx` |
| 37 | `07-components/components/ui/drawer.jsx` |
| 38 | `07-components/components/ui/dropdown-menu.jsx` |
| 39 | `07-components/components/ui/form.jsx` |
| 40 | `07-components/components/ui/hover-card.jsx` |
| 41 | `07-components/components/ui/input-otp.jsx` |
| 42 | `07-components/components/ui/input.jsx` |
| 43 | `07-components/components/ui/label.jsx` |
| 44 | `07-components/components/ui/menubar.jsx` |
| 45 | `07-components/components/ui/navigation-menu.jsx` |
| 46 | `07-components/components/ui/pagination.jsx` |
| 47 | `07-components/components/ui/popover.jsx` |
| 48 | `07-components/components/ui/progress.jsx` |
| 49 | `07-components/components/ui/radio-group.jsx` |
| 50 | `07-components/components/ui/resizable.jsx` |
| 51 | `07-components/components/ui/scroll-area.jsx` |
| 52 | `07-components/components/ui/select.jsx` |
| 53 | `07-components/components/ui/separator.jsx` |
| 54 | `07-components/components/ui/sheet.jsx` |
| 55 | `07-components/components/ui/sidebar.jsx` |
| 56 | `07-components/components/ui/skeleton.jsx` |
| 57 | `07-components/components/ui/slider.jsx` |
| 58 | `07-components/components/ui/sonner.jsx` |
| 59 | `07-components/components/ui/switch.jsx` |
| 60 | `07-components/components/ui/table.jsx` |
| 61 | `07-components/components/ui/tabs.jsx` |
| 62 | `07-components/components/ui/textarea.jsx` |
| 63 | `07-components/components/ui/toast.jsx` |
| 64 | `07-components/components/ui/toaster.jsx` |
| 65 | `07-components/components/ui/toggle-group.jsx` |
| 66 | `07-components/components/ui/toggle.jsx` |
| 67 | `07-components/components/ui/tooltip.jsx` |
| 68 | `07-components/components/ui/use-toast.jsx` |
| 69 | `07-components/components/UserNotRegisteredError.jsx` |

### Pages

| # | File |
|---|------|
| 1 | `08-pages/pages/About.jsx` |
| 2 | `08-pages/pages/AdminLogin.jsx` |
| 3 | `08-pages/pages/Cart.jsx` |
| 4 | `08-pages/pages/Checkout.jsx` |
| 5 | `08-pages/pages/Contact.jsx` |
| 6 | `08-pages/pages/ForgotPassword.jsx` |
| 7 | `08-pages/pages/Home.jsx` |
| 8 | `08-pages/pages/Login.jsx` |
| 9 | `08-pages/pages/ProductDetail.jsx` |
| 10 | `08-pages/pages/Products.jsx` |
| 11 | `08-pages/pages/Register.jsx` |
| 12 | `08-pages/pages/ResetPassword.jsx` |

### Documentation

| # | File |
|---|------|
| 1 | `09-docs/docs/API.md` |
| 2 | `09-docs/docs/COMPONENTS.md` |
| 3 | `09-docs/docs/DATABASE_SCRIPTS.md` |
| 4 | `09-docs/docs/UI_DESIGN.md` |

### Documentation

| # | File |
|---|------|
| 1 | `10-docs/DOCUMENTATION.md` |

