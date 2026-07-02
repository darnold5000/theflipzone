import { Card, CardContent } from "@/components/ui/card";
import type { StaffMember } from "@/data/staff";

interface StaffCardProps {
  member: StaffMember;
}

export function StaffCard({ member }: StaffCardProps) {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl mb-4">
          {member.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-sm text-[oklch(0.65_0.15_200)] font-medium mt-1">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
