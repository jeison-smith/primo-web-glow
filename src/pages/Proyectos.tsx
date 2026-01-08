import { Plus } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { StatusToggle } from "@/components/shared/StatusToggle";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  nombre: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  activo: boolean;
}

const mockProjects: Project[] = [
  { id: 42, nombre: "proyecto1767818104993", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 41, nombre: "proyecto1767817752087", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 40, nombre: "proyecto1767817254886", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 39, nombre: "proyecto1767816957068", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 38, nombre: "proyecto1767816887241", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: true },
  { id: 37, nombre: "proyecto1767801688129", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: false },
  { id: 36, nombre: "proyecto1767801578121", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: false },
  { id: 35, nombre: "proyecto1767801252029", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: false },
  { id: 34, nombre: "proyecto1767801039086", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", activo: false },
  { id: 33, nombre: "Proyecto_Auto_1767128769283", creador: "Jean Morales", fechaCreacion: "30/12/2025", ultActualizacion: "07/01/2026", activo: false },
];

const columns = [
  { key: "id", header: "Id", className: "w-20 text-center" },
  { key: "nombre", header: "Nombre" },
  { key: "creador", header: "Creador" },
  { key: "fechaCreacion", header: "Fecha de creación", className: "text-center" },
  { key: "ultActualizacion", header: "Últ. actualización", className: "text-center" },
  {
    key: "estado",
    header: "Estado",
    render: (item: Project) => (
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
      <Button size="sm" className="gap-1">
        <Plus className="w-4 h-4" />
        Crear Categoría
      </Button>
    ),
  },
];

export default function Proyectos() {
  return (
    <AppLayout title="Proyectos">
      <div className="space-y-6">
        {/* Action bar */}
        <div className="flex items-center justify-between">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Crear proyecto
          </Button>
        </div>

        {/* Data table */}
        <DataTable data={mockProjects} columns={columns} />
      </div>
    </AppLayout>
  );
}
