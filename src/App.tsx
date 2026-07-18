import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/redesign/HomeRedesign';
import Category from './pages/redesign/CategoryRedesign';
import Product from './pages/redesign/ProductRedesign';
import About from './pages/redesign/AboutRedesign';
import Contact from './pages/redesign/ContactRedesign';
import Login from './pages/redesign/LoginRedesign';
import Cart from './pages/redesign/CartRedesign';
import Wishlist from './pages/redesign/WishlistRedesign';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import AuthModal from './components/ui/AuthModalRedesign';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <MainLayout />
            <AuthModal />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'collection/:slug', element: <Category /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'cart', element: <Cart /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'collections', element: <Navigate to="/" replace /> },
      { path: 'category', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

