import { Plus, MoreHorizontal } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Usuario {
  id: number;
  rol: string;
  identificacion: string;
  nombre: string;
  cargo: string;
  fechaCreacion: string;
}

const mockUsuarios: Usuario[] = [
  { id: 1, rol: "Administrativo", identificacion: "1045711935", nombre: "Jeison Parada", cargo: "Ingeniero De Qa", fechaCreacion: "29/12/2025" },
  { id: 2, rol: "Administrativo", identificacion: "1002488360", nombre: "Kevin Oliveros", cargo: "Analista De Tesoreria", fechaCreacion: "29/12/2025" },
  { id: 3, rol: "Operativo", identificacion: "72307826", nombre: "Rodolfo Rodriguez", cargo: "Ingeniero De Desarrollo Lider", fechaCreacion: "29/12/2025" },
  { id: 4, rol: "Administrativo", identificacion: "1002024717", nombre: "Waldo Castro", cargo: "Ingeniero De Desarrollo Junior", fechaCreacion: "24/11/2025" },
  { id: 5, rol: "Administrativo", identificacion: "1002001071", nombre: "Jean Morales", cargo: "Presidente", fechaCreacion: "24/11/2025" },
];

const columns = [
  { key: "rol", header: "Rol", className: "text-center" },
  { key: "identificacion", header: "Identificación", className: "text-center" },
  { key: "nombre", header: "Nombre usuario", className: "text-center" },
  { key: "cargo", header: "Cargo", className: "text-center" },
  { key: "fechaCreacion", header: "Fecha creación", className: "text-center" },
  {
    key: "accion",
    header: "Acción",
    className: "text-center",
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function Usuarios() {
  return (
    <AppLayout title="Usuarios">
      <div className="space-y-6">
        {/* Action bar */}
        <div className="flex items-center justify-between">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Añadir usuario
          </Button>
        </div>

        {/* Data table */}
        <DataTable data={mockUsuarios} columns={columns} />
      </div>
    </AppLayout>
  );
}
