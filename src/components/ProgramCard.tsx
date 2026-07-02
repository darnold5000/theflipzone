import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getProgramAssets } from "@/data/programAssets";
import type { Program } from "@/data/programs";
import { iclassproLinks } from "@/data/iclassproLinks";
import type { LocationId } from "@/data/locations";

interface ProgramCardProps {
  program: Program;
  locationId?: LocationId;
  variant?: "default" | "elite";
}

export function ProgramCard({
  program,
  locationId,
  variant = "default",
}: ProgramCardProps) {
  const assets = getProgramAssets(program.slug);
  const enrollLocation =
    locationId && program.locations.includes(locationId)
      ? locationId
      : program.locations[0];

  const highlights =
    assets?.parentHighlights ?? program.whatTheyLearn.slice(0, 4);

  return (
    <Card
      className={`h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group ${
        variant === "elite" ? "ring-2 ring-amber-400/50" : ""
      }`}
    >
      {/* Large program image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        {assets?.image ? (
          <Image
            src={assets.image}
            alt={program.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`h-full bg-gradient-to-br ${program.color}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/90 text-xs font-semibold normal-case">
            👧 {program.ageRange}
          </p>
        </div>
      </div>

      <CardContent className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1 group-hover:text-flip-blue transition-colors">
          {program.name}
        </h3>
        <p className="text-sm text-flip-purple font-semibold mb-3 normal-case">
          Perfect for: {program.bestFor}
        </p>

        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
          What they&apos;ll learn
        </p>
        <ul className="space-y-1.5 mb-5 flex-grow">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-foreground normal-case"
            >
              <Check className="h-4 w-4 text-flip-teal shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={iclassproLinks[enrollLocation].classes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold rounded-full px-6 py-2.5 text-sm bg-gradient-flip text-white hover:opacity-95 transition-opacity w-full"
          >
            View Classes
          </a>
          <Link
            href={`/programs/${program.slug}`}
            className="text-center text-sm font-semibold text-flip-blue hover:underline normal-case"
          >
            Learn more about {program.name.split(" ")[0]}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
