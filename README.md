# get440 E-commerce

A modern, premium e-commerce application featuring 3D animations, glassmorphism design, and a vibrant orange gradient theme.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwindcss)

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend Framework** | React 18 | Component-based UI with hooks for state management |
| **Build Tool** | Vite | Fast HMR, optimized bundling |
| **Styling** | Tailwind CSS 3 | Utility-first CSS framework |
| **Icons** | Lucide React | Modern, customizable icons |
| **Fonts** | Inter (Google Fonts) | Clean, professional typography |

## Installation & Running

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone and navigate to project
cd get

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
get/
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS plugins
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main app (state management, routing)
    ├── index.css           # Global styles, animations, theme
    ├── data/
    │   └── products.js     # Product catalog data
    └── components/
        ├── Navbar.jsx      # Navigation with cart badge
        ├── ProductCard.jsx # Individual product display
        ├── ProductsPage.jsx# Products grid layout
        ├── CartItem.jsx    # Cart item with quantity controls
        ├── CartPage.jsx    # Shopping cart view
        ├── OrderCard.jsx   # Order receipt display
        └── OrdersPage.jsx  # Order history view
```

##  Features

- **3D Card Animations** - Lift, rotate, and glow on hover
- **Glassmorphism UI** - Frosted glass effect with backdrop blur
- **Orange Gradient Theme** - Warm, vibrant color palette
- **Micro-interactions** - Shimmer buttons, floating elements, staggered entrances
- **Responsive Design** - Mobile-first approach
- **Cart Management** - Add, update quantity, remove items
- **Order History** - Receipt-style order tracking

## Assumptions & Trade-offs

### Assumptions

1. **Static Product Data** - Products are hardcoded in `products.js`. For production, this would connect to a backend API.

2. **Client-side State** - All cart/order state lives in React state (memory). Page refresh clears data. Production would use:
   - LocalStorage for persistence
   - Backend API for orders
   - State management (Redux, Zustand) for complex flows

3. **No Authentication** - No user accounts or login. All users see the same experience.

4. **Single Currency** - USD only, no internationalization.

### Trade-offs

| Decision | Benefit | Trade-off |
|----------|---------|-----------|
| **Vite over CRA** | 10x faster HMR, smaller bundles | Less out-of-the-box config |
| **Tailwind over CSS-in-JS** | Faster development, smaller CSS | Learning curve, longer class strings |
| **Custom animations over Framer Motion** | Zero dependencies, smaller bundle | More CSS to maintain |
| **Props over Context** | Simple data flow, easier debugging | Prop drilling for deeply nested components |
| **Static stock values** | Simpler implementation | Stock doesn't update after purchase |

### Future Improvements

- [ ] LocalStorage persistence for cart
- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment gateway (Stripe)
- [ ] Product search & filtering
- [ ] Wishlist functionality
- [ ] Order status updates

## License

MIT
