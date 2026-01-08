import { Plus } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";

interface Plantilla {
  id: number;
  nombre: string;
  proyecto: string;
  categoria: string;
  creador: string;
  fechaCreacion: string;
  ultActualizacion: string;
  gestiones: number;
  activo: boolean;
}

const mockPlantillas: Plantilla[] = [
  { id: 29, nombre: "plantilla1767818104993", proyecto: "proyecto1767818104993", categoria: "categoria1767818104993", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 0, activo: true },
  { id: 28, nombre: "plantilla1767816887241", proyecto: "proyecto1767816887241", categoria: "categoria1767816887241", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 0, activo: true },
  { id: 27, nombre: "plantilla1767801688129", proyecto: "proyecto1767801688129", categoria: "categoria1767801688129", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 0, activo: false },
  { id: 26, nombre: "plantilla1767801578121", proyecto: "proyecto1767801578121", categoria: "categoria1767801578121", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 0, activo: false },
  { id: 25, nombre: "plantilla1767801252029", proyecto: "proyecto1767801252029", categoria: "categoria1767801252029", creador: "Jean Morales", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 0, activo: false },
  { id: 23, nombre: "zapatos", proyecto: "Prueba1", categoria: "Prueba_nombre", creador: "Waldo Castro", fechaCreacion: "07/01/2026", ultActualizacion: "07/01/2026", gestiones: 2, activo: true },
  { id: 22, nombre: "Llantas Cherolet", proyecto: "Carros", categoria: "Cherolet", creador: "Kevin Oliveros", fechaCreacion: "06/01/2026", ultActualizacion: "06/01/2026", gestiones: 3, activo: false },
  { id: 20, nombre: "mazda", proyecto: "Proyecto_Auto_1766761533690", categoria: "abc", creador: "Waldo Castro", fechaCreacion: "30/12/2025", ultActualizacion: "30/12/2025", gestiones: 0, activo: true },
];

const columns = [
  { key: "id", header: "N° Plantilla", className: "w-24 text-center" },
  { key: "nombre", header: "Nombre" },
  { key: "proyecto", header: "Proyecto" },
  { key: "categoria", header: "Categoría" },
  { key: "creador", header: "Creador", className: "text-center" },
  { key: "fechaCreacion", header: "Fecha de creación", className: "text-center" },
  { key: "ultActualizacion", header: "Últ. actualización", className: "text-center" },
  { key: "gestiones", header: "Gestiones", className: "text-center" },
  {
    key: "estado",
    header: "Estado",
    render: (item: Plantilla) => (
      <StatusBadge status={item.activo ? "active" : "inactive"} />
    ),
  },
];

export default function Plantillas() {
  return (
    <AppLayout title="Plantillas">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Crear plantilla
          </Button>
        </div>

        <DataTable data={mockPlantillas} columns={columns} />
      </div>
    </AppLayout>
  );
}
