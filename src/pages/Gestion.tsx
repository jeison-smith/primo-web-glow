import { AppLayout } from "@/components/layout/AppLayout";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal } from "lucide-react";

interface Caso {
  id: number;
  idCaso: number;
  nombrePlantilla: string;
  fechaInicio: string;
  fechaUltActualizacion: string;
  estado: "open" | "pending" | "active";
}

const proyectos = [
  "proyecto1767818104993",
  "proyecto1767817752087",
  "proyecto1767817254886",
  "proyecto1767816957068",
  "proyecto1767816887241",
  "proyecto1768016881212",
];

const mockCasos: Caso[] = [
  { id: 1, idCaso: 0, nombrePlantilla: "Marca tv", fechaInicio: "15/12/2025", fechaUltActualizacion: "15/12/2025", estado: "open" },
  { id: 2, idCaso: 0, nombrePlantilla: "modelo hg", fechaInicio: "15/12/2025", fechaUltActualizacion: "15/12/2025", estado: "open" },
  { id: 3, idCaso: 0, nombrePlantilla: "modelo hg", fechaInicio: "26/12/2025", fechaUltActualizacion: "26/12/2025", estado: "open" },
  { id: 4, idCaso: 0, nombrePlantilla: "Marca tv", fechaInicio: "26/12/2025", fechaUltActualizacion: "26/12/2025", estado: "open" },
  { id: 5, idCaso: 0, nombrePlantilla: "Marca tv", fechaInicio: "30/12/2025", fechaUltActualizacion: "30/12/2025", estado: "open" },
];

const columns = [
  { key: "idCaso", header: "ID caso", className: "text-center" },
  { key: "nombrePlantilla", header: "Nombre plantilla", className: "text-center" },
  { key: "fechaInicio", header: "Fecha de inicio", className: "text-center" },
  { key: "fechaUltActualizacion", header: "Fecha últ. actualización", className: "text-center" },
  {
    key: "estado",
    header: "Estado",
    className: "text-center",
    render: (item: Caso) => <StatusBadge status={item.estado} label="Abierto" />,
  },
  {
    key: "accion",
    header: "Acción",
    className: "text-center",
    render: () => (
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    ),
  },
];

export default function Gestion() {
  return (
    <AppLayout title="Gestión">
      <div className="space-y-6">
        {/* Project selector */}
        <Card>
          <CardHeader>
            <CardTitle>Plantillas y Categorias</CardTitle>
            <CardDescription>
              Selecciona la categoría y luego la plantilla en la lista desplegable.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Project chips */}
            <div className="flex flex-wrap gap-2">
              {proyectos.map((proyecto, index) => (
                <Button
                  key={proyecto}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {proyecto}
                </Button>
              ))}
            </div>
            
            {/* Plantilla selector */}
            <div className="max-w-md">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Buscar y seleccionar Plantilla..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plantilla1">plantilla1767818104993</SelectItem>
                  <SelectItem value="plantilla2">plantilla1767817752087</SelectItem>
                  <SelectItem value="plantilla3">plantilla1767816887241</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Mis casos */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Mis casos</h2>
          <DataTable data={mockCasos} columns={columns} />
        </div>
      </div>
    </AppLayout>
  );
}
