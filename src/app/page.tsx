import {
  Activity,
  ArrowUpRight,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Download,
  Filter,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MoreHorizontal,
  PhoneCall,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Accounts", icon: Building2 },
  { label: "Contacts", icon: Users },
  { label: "Pipeline", icon: Target },
  { label: "Activities", icon: Activity },
  { label: "Settings", icon: Settings },
]

const metrics = [
  {
    label: "Pipeline value",
    value: "$8.42M",
    change: "+12.4%",
    detail: "Across 214 open opportunities",
    icon: CircleDollarSign,
  },
  {
    label: "Closed revenue",
    value: "$1.28M",
    change: "+8.1%",
    detail: "Won this quarter",
    icon: TrendingUp,
  },
  {
    label: "Active accounts",
    value: "1,248",
    change: "+36",
    detail: "Enterprise and strategic tiers",
    icon: Building2,
  },
  {
    label: "Team attainment",
    value: "86%",
    change: "+5 pts",
    detail: "Forecast to plan",
    icon: Target,
  },
]

const pipelineStages = [
  { stage: "Qualified", deals: 74, value: "$2.1M", progress: 82 },
  { stage: "Demo booked", deals: 42, value: "$1.7M", progress: 64 },
  { stage: "Proposal", deals: 28, value: "$2.8M", progress: 58 },
  { stage: "Legal review", deals: 11, value: "$1.1M", progress: 38 },
]

const priorityAccounts = [
  {
    company: "Northstar Financial",
    owner: "Maya",
    initials: "NF",
    status: "Expansion",
    value: "$860K",
    next: "Security review today",
  },
  {
    company: "Atlas Health Group",
    owner: "Jon",
    initials: "AH",
    status: "Renewal",
    value: "$420K",
    next: "Exec sponsor follow-up",
  },
  {
    company: "Pioneer Logistics",
    owner: "Iris",
    initials: "PL",
    status: "At risk",
    value: "$315K",
    next: "Usage drop investigation",
  },
]

const activityFeed = [
  {
    icon: PhoneCall,
    title: "Call completed with Northstar",
    meta: "22 minutes ago",
  },
  {
    icon: Mail,
    title: "Proposal sent to Atlas Health",
    meta: "1 hour ago",
  },
  {
    icon: CalendarDays,
    title: "Board prep meeting scheduled",
    meta: "Tomorrow at 10:00 AM",
  },
  {
    icon: MessageSquare,
    title: "Legal requested redlines",
    meta: "Pioneer Logistics",
  },
]

function SidebarNav() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/70 bg-card/60 px-4 py-5 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
          <Sparkles className="size-4" aria-hidden />
        </div>
        <div>
          <p className="font-heading text-sm font-semibold">Fabulous CRM</p>
          <p className="text-xs text-muted-foreground">Revenue command</p>
        </div>
      </div>

      <nav className="mt-8 space-y-1" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? "flex items-center gap-3 rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm"
                : "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            }
          >
            <item.icon className="size-4" aria-hidden />
            {item.label}
          </a>
        ))}
      </nav>

      <Card className="mt-auto bg-primary/[0.06]" size="sm">
        <CardHeader>
          <CardTitle>AI deal coach</CardTitle>
          <CardDescription>
            12 accounts have next-best-action recommendations ready.
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-between border-primary/15 bg-primary/[0.08]">
          <Button size="sm">Review</Button>
          <Sparkles className="size-4 text-primary" aria-hidden />
        </CardFooter>
      </Card>
    </aside>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <SidebarNav />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-border/70 bg-background/85 px-4 py-3 backdrop-blur sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <div className="relative min-w-0 flex-1 md:max-w-md">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                type="search"
                placeholder="Search accounts, deals, contacts"
                className="bg-card pl-8"
                aria-label="Search CRM"
              />
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download aria-hidden />
              Export
            </Button>
            <Button variant="outline" size="icon" aria-label="Notifications">
              <Bell aria-hidden />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary/15 font-medium text-primary">
                GW
              </AvatarFallback>
              <AvatarBadge />
            </Avatar>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl flex-1 space-y-6 px-4 py-6 sm:px-6 lg:py-8">
          <section className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
            <div className="grid gap-6 p-5 md:grid-cols-[1fr_auto] md:p-6">
              <div className="max-w-3xl space-y-4">
                <Badge variant="secondary" className="gap-1.5">
                  <Sparkles aria-hidden />
                  Enterprise CRM
                </Badge>
                <div className="space-y-2">
                  <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                    Revenue dashboard
                  </h1>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Track strategic accounts, pipeline health, sales activity,
                    and forecast confidence from one executive-ready dashboard.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Plus aria-hidden />
                    New opportunity
                  </Button>
                  <Button variant="outline">
                    <Filter aria-hidden />
                    Segment
                  </Button>
                </div>
              </div>

              <Card className="min-w-72 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">
                    Q4 forecast
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/75">
                    Commit plus best case
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-4xl font-semibold">$4.9M</p>
                    <p className="mt-1 text-sm text-primary-foreground/75">
                      91% confidence after recent stage movement
                    </p>
                  </div>
                  <Progress
                    value={91}
                    className="bg-primary-foreground/20 [&_[data-slot=progress-indicator]]:bg-primary-foreground"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <section
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            aria-label="Revenue metrics"
          >
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <CardAction>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <metric.icon className="size-4" aria-hidden />
                    </div>
                  </CardAction>
                  <CardDescription>{metric.label}</CardDescription>
                  <CardTitle className="text-2xl">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">
                    {metric.detail}
                  </p>
                  <Badge variant="secondary" className="gap-1">
                    <ArrowUpRight aria-hidden />
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <Card>
              <CardHeader>
                <CardAction>
                  <Button variant="ghost" size="icon-sm" aria-label="More">
                    <MoreHorizontal aria-hidden />
                  </Button>
                </CardAction>
                <CardTitle>Pipeline by phase</CardTitle>
                <CardDescription>
                  Weighted value and deal movement across the enterprise funnel.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {pipelineStages.map((item) => (
                  <div key={item.stage} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium">{item.stage}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.deals} open deals
                        </p>
                      </div>
                      <p className="font-heading text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                    <Progress value={item.progress} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardAction>
                  <Badge variant="outline">Live</Badge>
                </CardAction>
                <CardTitle>Activity stream</CardTitle>
                <CardDescription>
                  Recent motions from reps, buyers, and success teams.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activityFeed.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <item.icon className="size-4" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
            <Card>
              <CardHeader>
                <CardAction>
                  <Button variant="outline" size="sm">
                    View all
                    <ChevronRight aria-hidden />
                  </Button>
                </CardAction>
                <CardTitle>Priority accounts</CardTitle>
                <CardDescription>
                  High-value customers that need attention this week.
                </CardDescription>
              </CardHeader>
              <CardContent className="divide-y divide-border/70 p-0">
                {priorityAccounts.map((account) => (
                  <div
                    key={account.company}
                    className="grid gap-4 px-4 py-4 sm:grid-cols-[1fr_auto_auto]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar size="lg">
                        <AvatarFallback className="bg-primary/15 font-medium text-primary">
                          {account.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {account.company}
                        </p>
                        <p className="truncate text-sm text-muted-foreground">
                          Owner: {account.owner}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:justify-end">
                      <Badge
                        variant={
                          account.status === "At risk"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {account.status}
                      </Badge>
                      <span className="font-heading text-sm font-semibold">
                        {account.value}
                      </span>
                    </div>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
                      <Clock3 className="size-4" aria-hidden />
                      {account.next}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team focus</CardTitle>
                <CardDescription>
                  Sprint goals for enterprise sales this week.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between gap-3 rounded-xl bg-muted/70 p-3">
                  <div>
                    <p className="font-medium">Coverage target</p>
                    <p className="text-xs text-muted-foreground">
                      48 executive touches planned
                    </p>
                  </div>
                  <Badge>72%</Badge>
                </div>
                <div className="space-y-3">
                  {["Review stale proposals", "Confirm renewal risks", "Book CFO alignment"].map(
                    (task) => (
                      <div key={task} className="flex items-center gap-3">
                        <CheckCircle2
                          className="size-4 text-primary"
                          aria-hidden
                        />
                        <span className="text-sm">{task}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="pt-2">
                  <p className="mb-3 text-sm font-medium">Deal desk on call</p>
                  <AvatarGroup>
                    {["MR", "JT", "AS"].map((initials) => (
                      <Avatar key={initials}>
                        <AvatarFallback className="bg-secondary font-medium text-secondary-foreground">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount>+5</AvatarGroupCount>
                  </AvatarGroup>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
