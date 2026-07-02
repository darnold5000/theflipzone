import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EnrollButton } from "@/components/ui-primitives";
import type { Location } from "@/data/locations";

interface ContactCardProps {
  location: Location;
}

export function ContactCard({ location }: ContactCardProps) {
  return (
    <Card className="border-0 shadow-lg h-full">
      <CardContent className="p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-4">{location.name}</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <span>
              {location.address ?? `${location.city}, ${location.state}`}
            </span>
          </div>
          {location.phones.map((phone) => (
            <a
              key={phone.number}
              href={`tel:${phone.number.replace(/\D/g, "")}`}
              className="flex items-start gap-3 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                {phone.number}
                {phone.label && (
                  <span className="text-muted-foreground"> — {phone.label}</span>
                )}
              </span>
            </a>
          ))}
          <a
            href={`mailto:${location.email}`}
            className="flex items-start gap-3 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            {location.email}
          </a>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <EnrollButton href={location.classesUrl} variant="accent" className="w-full justify-center">
            View Classes
          </EnrollButton>
          <EnrollButton href={location.portalUrl} variant="outline" className="w-full justify-center">
            Parent Portal
          </EnrollButton>
        </div>
      </CardContent>
    </Card>
  );
}
