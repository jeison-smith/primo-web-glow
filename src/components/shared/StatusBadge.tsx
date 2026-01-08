import { cn } from "@/lib/utils";

type StatusType = "active" | "inactive" | "pending" | "open";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
}

const statusConfig: Record<StatusType, { class: string; defaultLabel: string }> = {
  active: { class: "badge-active", defaultLabel: "Activo" },
  inactive: { class: "badge-inactive", defaultLabel: "Inactivo" },
  pending: { class: "badge-pending", defaultLabel: "Pendiente" },
  open: { class: "badge-info", defaultLabel: "Abierto" },
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn(config.class)}>
      {label || config.defaultLabel}
    </span>
  );
}
