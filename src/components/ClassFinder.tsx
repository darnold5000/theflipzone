"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, MapPin, Baby, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { findPrograms, type ClassFinderInput, type ProgramInterest } from "@/data/classFinder";
import { iclassproLinks } from "@/data/iclassproLinks";
import { getProgramAssets } from "@/data/programAssets";
import type { LocationId } from "@/data/locations";
import { cn } from "@/lib/utils";

const STEPS = ["Age", "Program", "Location", "Enroll"] as const;

const ageOptions = [
  { value: 2, label: "18 months – 2" },
  { value: 4, label: "3 – 4 years" },
  { value: 6, label: "5 – 6 years" },
  { value: 9, label: "7 – 9 years" },
  { value: 12, label: "10 – 12 years" },
  { value: 15, label: "13+ years" },
];

const interestOptions: { value: ProgramInterest; label: string; emoji: string }[] = [
  { value: "preschool", label: "Preschool / first class", emoji: "👶" },
  { value: "gymnastics", label: "Gymnastics", emoji: "🤸" },
  { value: "tumbling", label: "Tumbling", emoji: "⭐" },
  { value: "ninja", label: "Ninja / obstacles", emoji: "🥷" },
  { value: "competitive", label: "Competitive team", emoji: "🏆" },
  { value: "special-needs", label: "Special needs / adaptive", emoji: "💫" },
];

export function ClassFinder() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<ClassFinderInput>({
    location: "plainfield",
    age: 4,
    interest: "preschool",
    experience: "beginner",
    goal: "first-time",
  });
  const [results, setResults] = useState<ReturnType<typeof findPrograms> | null>(null);

  function goNext() {
    if (step === 2) {
      setResults(findPrograms(input));
    }
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <Card className="border-0 shadow-xl overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gradient-flip-soft border-b border-blue-100 px-6 sm:px-8 py-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          Find Your Child&apos;s Program
        </h3>
        <p className="mt-2 text-muted-foreground normal-case">
          Three quick questions — then we&apos;ll show you the perfect class and
          help you enroll.
        </p>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mt-6">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0 transition-colors",
                  i < step
                    ? "bg-flip-teal text-white"
                    : i === step
                      ? "bg-flip-blue text-white"
                      : "bg-muted text-muted-foreground"
                )}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-semibold hidden sm:block normal-case",
                  i === step ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
              {i < STEPS.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground hidden sm:block ml-auto" />
              )}
            </div>
          ))}
        </div>
      </div>

      <CardContent className="p-6 sm:p-8">
        {/* Step 0: Age */}
        {step === 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-flip-blue">
              <Baby className="h-5 w-5" />
              <p className="font-bold normal-case">How old is your child?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ageOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setInput({ ...input, age: opt.value })}
                  className={cn(
                    "rounded-xl border-2 p-4 text-left font-semibold text-sm transition-all normal-case",
                    input.age === opt.value
                      ? "border-flip-blue bg-blue-50 text-flip-blue"
                      : "border-border hover:border-flip-blue/50"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Program */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-flip-purple">
              <Sparkles className="h-5 w-5" />
              <p className="font-bold normal-case">What are you looking for?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interestOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setInput({ ...input, interest: opt.value })}
                  className={cn(
                    "rounded-xl border-2 p-4 text-left font-semibold transition-all normal-case flex items-center gap-3",
                    input.interest === opt.value
                      ? "border-flip-purple bg-purple-50 text-flip-purple"
                      : "border-border hover:border-flip-purple/50"
                  )}
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-flip-teal">
              <MapPin className="h-5 w-5" />
              <p className="font-bold normal-case">Which location is closest?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(
                [
                  {
                    id: "plainfield" as LocationId,
                    name: "Plainfield, Indiana",
                    detail: "Preschool, rec, tumbling, ninja, team & SSGNL",
                  },
                  {
                    id: "bradenton" as LocationId,
                    name: "Bradenton, Florida",
                    detail: "Preschool, rec, team, camps & parties",
                  },
                ] as const
              ).map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setInput({ ...input, location: loc.id })}
                  className={cn(
                    "rounded-2xl border-2 p-5 text-left transition-all",
                    input.location === loc.id
                      ? "border-flip-teal bg-teal-50 ring-2 ring-flip-teal/20"
                      : "border-border hover:border-flip-teal/50"
                  )}
                >
                  <p className="font-bold text-lg normal-case">{loc.name}</p>
                  <p className="text-sm text-muted-foreground mt-1 normal-case">
                    {loc.detail}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Results + Enroll */}
        {step === 3 && results && (
          <div className="space-y-5">
            <p className="font-bold text-lg normal-case">
              Great news — here&apos;s what we recommend for your child:
            </p>
            {results.map((result) => {
              const assets = getProgramAssets(result.programSlug);
              return (
                <div
                  key={result.programSlug}
                  className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 rounded-2xl border-2 border-flip-blue/20 bg-gradient-flip-soft"
                >
                  {assets?.image && (
                    <div className="relative h-32 w-full sm:w-40 shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={assets.image}
                        alt={result.programName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-grow normal-case">
                    <p className="font-bold text-xl">{result.programName}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {result.reason}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <a
                        href={iclassproLinks[input.location].classes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center font-bold rounded-full px-6 py-2.5 text-sm bg-gradient-flip text-white hover:opacity-95"
                      >
                        Enroll in {input.location === "plainfield" ? "Indiana" : "Florida"} Classes →
                      </a>
                      <Link
                        href={`/programs/${result.programSlug}`}
                        className="inline-flex items-center justify-center font-semibold rounded-full px-5 py-2.5 text-sm border-2 border-flip-blue text-flip-blue hover:bg-flip-blue hover:text-white transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="text-xs text-muted-foreground text-center normal-case">
              You&apos;ll complete registration in our secure parent portal — billing
              and class selection all in one place.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={step === 0}
            className="normal-case"
          >
            Back
          </Button>
          {step < 3 ? (
            <Button
              onClick={goNext}
              className="rounded-full px-8 bg-gradient-flip text-white hover:opacity-95 normal-case font-bold"
            >
              {step === 2 ? "See My Recommendations" : "Next"}
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                setStep(0);
                setResults(null);
              }}
              className="rounded-full normal-case"
            >
              Start Over
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
