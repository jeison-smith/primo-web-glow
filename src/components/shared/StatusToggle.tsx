import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface StatusToggleProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}

export function StatusToggle({ checked, onCheckedChange, label = "Activar o desactivar" }: StatusToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          "data-[state=checked]:bg-success",
          "data-[state=unchecked]:bg-muted"
        )}
      />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
