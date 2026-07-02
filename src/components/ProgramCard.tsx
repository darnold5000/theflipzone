import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnrollButton } from "@/components/ui-primitives";
import type { Program } from "@/data/programs";
import { iclassproLinks } from "@/data/iclassproLinks";
import type { LocationId } from "@/data/locations";

interface ProgramCardProps {
  program: Program;
  locationId?: LocationId;
}

export function ProgramCard({ program, locationId }: ProgramCardProps) {
  const enrollLocation =
    locationId && program.locations.includes(locationId)
      ? locationId
      : program.locations[0];

  return (
    <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{program.icon}</span>
          <Badge variant="secondary" className="text-xs">
            {program.ageRange}
          </Badge>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {program.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {program.shortDescription}
        </p>
        <div className="space-y-1 mb-4 text-xs text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Level:</span>{" "}
            {program.skillLevel}
          </p>
          <p>
            <span className="font-medium text-foreground">Best for:</span>{" "}
            {program.bestFor}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <EnrollButton
            href={iclassproLinks[enrollLocation].classes}
            variant="accent"
            size="sm"
            className="ml-auto"
          >
            Enroll
          </EnrollButton>
        </div>
      </CardContent>
    </Card>
  );
}
