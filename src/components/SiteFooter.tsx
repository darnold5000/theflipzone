import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { locations } from "@/data/locations";
import { iclassproLinks } from "@/data/iclassproLinks";
import { programs } from "@/data/programs";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.18_0.05_260)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-bold text-sm">
                FZ
              </div>
              <span className="font-bold text-lg">The Flip Zone</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Building confident kids through gymnastics, tumbling, and preschool
              programs at two locations in Indiana and Florida.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Locations</h3>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.id} className="text-sm">
                  <Link
                    href={`/${loc.id}`}
                    className="font-medium hover:text-[oklch(0.75_0.15_200)] transition-colors"
                  >
                    {loc.name}
                  </Link>
                  {loc.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number.replace(/\D/g, "")}`}
                      className="flex items-center gap-1.5 text-white/60 hover:text-white/90 mt-1"
                    >
                      <Phone className="h-3 w-3" />
                      {phone.number}
                    </a>
                  ))}
                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-1.5 text-white/60 hover:text-white/90 mt-1"
                  >
                    <Mail className="h-3 w-3" />
                    {loc.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Programs</h3>
            <ul className="space-y-2 text-sm">
              {programs.slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white/90">Enroll</h3>
            <div className="space-y-2 text-sm">
              <a
                href={iclassproLinks.plainfield.classes}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Indiana Classes
              </a>
              <a
                href={iclassproLinks.plainfield.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Indiana Parent Portal
              </a>
              <a
                href={iclassproLinks.bradenton.classes}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Florida Classes
              </a>
              <a
                href={iclassproLinks.bradenton.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Florida Parent Portal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} The Flip Zone. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white/80 transition-colors">
              Contact
            </Link>
            <Link href="/locations" className="hover:text-white/80 transition-colors">
              <MapPin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
