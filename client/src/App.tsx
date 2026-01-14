import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Login from "@/pages/Login";
import Favorites from "@/pages/Favorites";
import Locations from "@/pages/Locations";
import Orders from "@/pages/Orders";
import Checkout from "@/pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Login page without navbar/footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Main layout with navbar/footer */}
            <Route
              path="/*"
              element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route path="/locations" element={<Locations />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
