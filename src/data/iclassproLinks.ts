import type { LocationId } from "./locations";

export interface PortalLinks {
  portal: string;
  classes: string;
  dashboard: string;
  camps?: string;
}

export const iclassproLinks: Record<LocationId, PortalLinks> = {
  plainfield: {
    portal: "https://portal.iclasspro.com/flipzone",
    classes: "https://portal.iclasspro.com/flipzone/classes",
    dashboard: "https://portal.iclasspro.com/flipzone/dashboard",
    camps: "https://portal.iclasspro.com/flipzone/camps",
  },
  bradenton: {
    portal: "https://portal.iclasspro.com/flipzoneswfl",
    classes: "https://portal.iclasspro.com/flipzoneswfl/classes",
    dashboard: "https://portal.iclasspro.com/flipzoneswfl/dashboard",
    camps: "https://portal.iclasspro.com/flipzoneswfl/camps",
  },
};

export function getPortalLinks(locationId: LocationId): PortalLinks {
  return iclassproLinks[locationId];
}
