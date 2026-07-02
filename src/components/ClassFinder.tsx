"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { EnrollButton } from "@/components/ui-primitives";
import {
  findPrograms,
  type ClassFinderInput,
  type ProgramInterest,
  type ExperienceLevel,
  type Goal,
} from "@/data/classFinder";
import { iclassproLinks } from "@/data/iclassproLinks";
import type { LocationId } from "@/data/locations";

export function ClassFinder() {
  const [input, setInput] = useState<ClassFinderInput>({
    location: "plainfield",
    age: 5,
    interest: "gymnastics",
    experience: "beginner",
    goal: "first-time",
  });
  const [results, setResults] = useState<ReturnType<typeof findPrograms> | null>(
    null
  );
  const [searched, setSearched] = useState(false);

  function handleSearch() {
    const found = findPrograms(input);
    setResults(found);
    setSearched(true);
  }

  return (
    <Card className="border-0 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-[oklch(0.45_0.12_260)] p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Search className="h-6 w-6 text-white" />
          <h3 className="text-2xl font-bold text-white">Find Your Program</h3>
        </div>
        <p className="text-white/80 text-sm">
          Answer a few questions and we&apos;ll recommend the best Flip Zone
          program for your child.
        </p>
      </div>

      <CardContent className="p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <Label>Location</Label>
            <Select
              value={input.location}
              onValueChange={(v) =>
                setInput({ ...input, location: v as LocationId })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plainfield">Plainfield, Indiana</SelectItem>
                <SelectItem value="bradenton">Bradenton, Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Child&apos;s Age</Label>
            <Select
              value={String(input.age)}
              onValueChange={(v) => setInput({ ...input, age: Number(v) })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
                  (age) => (
                    <SelectItem key={age} value={String(age)}>
                      {age} years old
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Program Interest</Label>
            <Select
              value={input.interest}
              onValueChange={(v) =>
                setInput({ ...input, interest: v as ProgramInterest })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gymnastics">Gymnastics</SelectItem>
                <SelectItem value="tumbling">Tumbling</SelectItem>
                <SelectItem value="ninja">Ninja / Obstacles</SelectItem>
                <SelectItem value="preschool">Preschool</SelectItem>
                <SelectItem value="competitive">Competitive Team</SelectItem>
                <SelectItem value="special-needs">Special Needs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Experience Level</Label>
            <Select
              value={input.experience}
              onValueChange={(v) =>
                setInput({ ...input, experience: v as ExperienceLevel })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label>Goal</Label>
            <Select
              value={input.goal}
              onValueChange={(v) => setInput({ ...input, goal: v as Goal })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-time">
                  Try gymnastics for the first time
                </SelectItem>
                <SelectItem value="strength">
                  Build strength and coordination
                </SelectItem>
                <SelectItem value="tumbling">Learn tumbling skills</SelectItem>
                <SelectItem value="cheer">Prepare for cheer</SelectItem>
                <SelectItem value="competitive">
                  Explore competitive gymnastics
                </SelectItem>
                <SelectItem value="preschool">Preschool enrichment</SelectItem>
                <SelectItem value="private">Private coaching</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={handleSearch} className="w-full sm:w-auto rounded-full px-8">
          <Search className="h-4 w-4 mr-2" />
          Find Programs
        </Button>

        {searched && results && (
          <div className="mt-8 space-y-4">
            <h4 className="font-semibold text-lg">Recommended Programs</h4>
            {results.length === 0 ? (
              <p className="text-muted-foreground">
                No exact matches found. Contact your local Flip Zone for
                personalized recommendations.
              </p>
            ) : (
              results.map((result) => (
                <div
                  key={result.programSlug}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-muted/50 border"
                >
                  <div>
                    <p className="font-semibold">{result.programName}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {result.reason}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Link
                      href={`/programs/${result.programSlug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <EnrollButton
                      href={iclassproLinks[input.location].classes}
                      size="sm"
                      variant="accent"
                    >
                      Enroll
                    </EnrollButton>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
