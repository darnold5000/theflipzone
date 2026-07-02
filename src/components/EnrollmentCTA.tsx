import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EnrollButton } from "@/components/ui-primitives";
import { iclassproLinks } from "@/data/iclassproLinks";

export function EnrollmentCTA() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold sm:text-4xl uppercase">
          Ready to Register?
        </h2>
        <p className="mt-3 text-lg text-white/85 max-w-xl mx-auto normal-case">
          You&apos;ve found the right program — now enroll in a few clicks
          through our secure parent portal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="border-0 bg-white/15 backdrop-blur text-white">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-1 uppercase">Indiana</h3>
            <p className="text-sm text-white/75 mb-6 normal-case">Plainfield</p>
            <div className="flex flex-col gap-3">
              <EnrollButton
                href={iclassproLinks.plainfield.classes}
                variant="white"
                className="w-full justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Indiana Classes
              </EnrollButton>
              <EnrollButton
                href={iclassproLinks.plainfield.dashboard}
                variant="outline"
                className="w-full justify-center border-white/50 text-white hover:bg-white hover:text-flip-blue"
              >
                Indiana Parent Portal
              </EnrollButton>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/15 backdrop-blur text-white">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-1 uppercase">Florida</h3>
            <p className="text-sm text-white/75 mb-6 normal-case">Bradenton</p>
            <div className="flex flex-col gap-3">
              <EnrollButton
                href={iclassproLinks.bradenton.classes}
                variant="white"
                className="w-full justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Florida Classes
              </EnrollButton>
              <EnrollButton
                href={iclassproLinks.bradenton.dashboard}
                variant="outline"
                className="w-full justify-center border-white/50 text-white hover:bg-white hover:text-flip-blue"
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
