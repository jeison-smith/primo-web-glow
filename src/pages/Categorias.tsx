import { Plus } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { StatusToggle } from "@/components/shared/StatusToggle";
import { Button } from "@/components/ui/button";

interface Categoria {
  id: number;
  nombre: string;
  proyecto: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  activo: boolean;
}

const mockCategorias: Categoria[] = [
  { id: 45, nombre: "categoria1767818104993", proyecto: "proyecto1767818104993", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 44, nombre: "categoria1767817752087", proyecto: "proyecto1767817752087", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "-", activo: true },
  { id: 43, nombre: "categoria1767816887241", proyecto: "proyecto1767816887241", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "-", activo: true },
  { id: 42, nombre: "categoria1767801688129", proyecto: "proyecto1767801688129", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "-", activo: true },
  { id: 41, nombre: "categoria1767801578121", proyecto: "proyecto1767801578121", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "-", activo: true },
  { id: 38, nombre: "Cherolet", proyecto: "Carros", creador: "Kevin Oliveros", fechaCreacion: "06/01/2026", ultActualizacion: "06/01/2026", activo: false },
  { id: 37, nombre: "Categoria_Auto_1767128769283", proyecto: "Proyecto_Auto_1767128769283", creador: "Jean Morales", fechaCreacion: "30/12/2025", ultActualizacion: "-", activo: true },
  { id: 36, nombre: "Prueba_nombre", proyecto: "Proyecto_Auto_1766767422613", creador: "Jean Morales", fechaCreacion: "29/12/2025", ultActualizacion: "29/12/2025", activo: false },
];

const columns = [
  { key: "id", header: "Id", className: "w-16 text-center" },
  { key: "nombre", header: "Nombre" },
  { key: "proyecto", header: "Proyecto" },
  { key: "creador", header: "Creador", className: "text-center" },
  { key: "fechaCreacion", header: "Fecha de creación", className: "text-center" },
  { key: "ultActualizacion", header: "Últ. actualización", className: "text-center" },
  {
    key: "estado",
    header: "Estado",
    render: (item: Categoria) => (
      <div className="flex items-center gap-3">
        <StatusBadge status={item.activo ? "active" : "inactive"} />
        <StatusToggle checked={item.activo} label="Activar o desactivar proyecto" />
      </div>
    ),
  },
  {
    key: "accion",
    header: "Acción",
    render: () => (
      <Button size="sm" variant="outline" className="gap-1">
        <Plus className="w-4 h-4" />
        Crear Plantilla
      </Button>
    ),
  },
];

export default function Categorias() {
  return (
    <AppLayout title="Categorías">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Crear Categoría
          </Button>
        </div>

        <DataTable data={mockCategorias} columns={columns} />
      </div>
    </AppLayout>
  );
}
