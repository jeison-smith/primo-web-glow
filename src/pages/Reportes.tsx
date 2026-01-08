import { Download } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Reportes() {
  return (
    <AppLayout title="Reportes">
      <div className="space-y-6">
        <Card className="card-elevated">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Plantilla */}
              <div className="space-y-2">
                <Label htmlFor="plantilla">Plantilla</Label>
                <Select>
                  <SelectTrigger id="plantilla">
                    <SelectValue placeholder="Seleccionar plantilla" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plantilla1">plantilla1767818104993</SelectItem>
                    <SelectItem value="plantilla2">plantilla1767817752087</SelectItem>
                    <SelectItem value="plantilla3">plantilla1767816887241</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fecha inicio */}
              <div className="space-y-2">
                <Label htmlFor="fechaInicio">Fecha inicio</Label>
                <Input type="date" id="fechaInicio" defaultValue="2026-01-01" />
              </div>

              {/* Fecha fin */}
              <div className="space-y-2">
                <Label htmlFor="fechaFin">Fecha fin</Label>
                <Input type="date" id="fechaFin" defaultValue="2026-01-08" />
              </div>

              {/* Estado */}
              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Select defaultValue="activo">
                  <SelectTrigger id="estado">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="activo">Activo</SelectItem>
                    <SelectItem value="inactivo">Inactivo</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Download button */}
              <div>
                <Button className="w-full gap-2 bg-success hover:bg-success/90">
                  <Download className="w-4 h-4" />
                  Descargar información
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for report visualization */}
        <Card className="card-elevated">
          <CardContent className="py-24">
            <div className="text-center text-muted-foreground">
              <p className="text-lg">Selecciona los filtros y descarga el reporte</p>
              <p className="text-sm mt-2">Los datos se exportarán en formato Excel</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
