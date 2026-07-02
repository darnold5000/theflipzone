import { Badge } from "@/components/ui/badge";
import type { LocationId } from "@/data/locations";

interface LocationBadgeProps {
  locationId: LocationId;
}

const labels: Record<LocationId, { label: string; className: string }> = {
  plainfield: {
    label: "Indiana",
    className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  },
  bradenton: {
    label: "Florida",
    className: "bg-teal-100 text-teal-800 hover:bg-teal-100",
  },
};

export function LocationBadge({ locationId }: LocationBadgeProps) {
  const { label, className } = labels[locationId];
  return (
    <Badge variant="secondary" className={className}>
      {label}
    </Badge>
  );
}
