import { ProgramCard } from "@/components/ProgramCard";
import type { Program } from "@/data/programs";
import type { LocationId } from "@/data/locations";

interface ProgramGridProps {
  programs: Program[];
  locationId?: LocationId;
}

export function ProgramGrid({ programs, locationId }: ProgramGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <ProgramCard
          key={program.slug}
          program={program}
          locationId={locationId}
        />
      ))}
    </div>
  );
}
