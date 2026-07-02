import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EnrollButton } from "@/components/ui-primitives";
import { iclassproLinks } from "@/data/iclassproLinks";

export function EnrollmentCTA() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Register?
        </h2>
        <p className="mt-3 text-lg text-white/70 max-w-xl mx-auto">
          Enroll in classes, camps, and events through our secure iClassPro
          parent portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 bg-white/10 backdrop-blur text-white">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-1">Indiana Parent Portal</h3>
            <p className="text-sm text-white/70 mb-6">Plainfield, Indiana</p>
            <div className="flex flex-col gap-3">
              <EnrollButton
                href={iclassproLinks.plainfield.classes}
                variant="accent"
                className="w-full justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Indiana Classes
              </EnrollButton>
              {iclassproLinks.plainfield.camps && (
                <EnrollButton
                  href={iclassproLinks.plainfield.camps}
                  variant="outline"
                  className="w-full justify-center border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  Indiana Camps / Events
                </EnrollButton>
              )}
              <EnrollButton
                href={iclassproLinks.plainfield.dashboard}
                variant="outline"
                className="w-full justify-center border-white/40 text-white hover:bg-white hover:text-primary"
              >
                Indiana Parent Portal
              </EnrollButton>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/10 backdrop-blur text-white">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-1">Florida Parent Portal</h3>
            <p className="text-sm text-white/70 mb-6">Bradenton, Florida</p>
            <div className="flex flex-col gap-3">
              <EnrollButton
                href={iclassproLinks.bradenton.classes}
                variant="accent"
                className="w-full justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Florida Classes
              </EnrollButton>
              {iclassproLinks.bradenton.camps && (
                <EnrollButton
                  href={iclassproLinks.bradenton.camps}
                  variant="outline"
                  className="w-full justify-center border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  Florida Camps / Events
                </EnrollButton>
              )}
              <EnrollButton
                href={iclassproLinks.bradenton.dashboard}
                variant="outline"
                className="w-full justify-center border-white/40 text-white hover:bg-white hover:text-primary"
              >
                Florida Parent Portal
              </EnrollButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
