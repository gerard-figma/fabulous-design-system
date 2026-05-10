import { Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function SectionTitle({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="border-primary/40 font-heading text-lg font-semibold tracking-tight text-foreground border-l-4 pl-3"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-1 flex-col">
      <main className="mx-auto w-full max-w-3xl flex-1 space-y-14 px-6 py-16 sm:px-8">
        <header className="space-y-2">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase">
            shadcn/ui
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Hey CES
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
            Default surface is a cool gray with a pink tint; buttons, badges,
            rings, and accents lean into pink for a cohesive, playful system.
          </p>
        </header>

        <section className="space-y-4" aria-labelledby="buttons-heading">
          <SectionTitle id="buttons-heading">Buttons</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="badges-heading">
          <SectionTitle id="badges-heading">Badges</SectionTitle>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="cards-heading">
          <SectionTitle id="cards-heading">Cards</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>Project Alpha</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    Active
                  </Badge>
                </div>
                <CardDescription>
                  Pilot rollout for the new onboarding flow. Tracking adoption
                  and drop-off across regions.
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-primary/15 justify-end bg-primary/[0.06]">
                <Button size="sm" variant="default">
                  Open project
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Team member</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Avatar size="lg">
                  <AvatarFallback className="bg-primary/15 text-primary font-medium">
                    SK
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 space-y-0.5">
                  <p className="truncate font-medium">Sasha Kim</p>
                  <p className="text-muted-foreground truncate text-sm">
                    Product design · San Francisco
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="input-heading">
          <SectionTitle id="input-heading">Input</SectionTitle>
          <div className="bg-card ring-foreground/8 flex max-w-md gap-2 rounded-xl p-4 shadow-sm ring-1">
            <div className="relative min-w-0 flex-1">
              <Search
                className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                aria-hidden
              />
              <Input
                type="search"
                placeholder="Search components, tokens…"
                className="bg-background pl-8"
                aria-label="Search"
              />
            </div>
            <Button type="submit" className="shrink-0">
              Search
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
