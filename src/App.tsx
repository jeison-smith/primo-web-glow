import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Proyectos from "./pages/Proyectos";
import Usuarios from "./pages/Usuarios";
import Categorias from "./pages/Categorias";
import Plantillas from "./pages/Plantillas";
import Gestion from "./pages/Gestion";
import Reportes from "./pages/Reportes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/plantillas" element={<Plantillas />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
