"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import { api } from "~/trpc/react"


export function AreaChartStats({ id }: { id: string }) {
  const { data: chartData, isLoading } = api.joinee.getMonthlyStats.useQuery({ waitlistId: id });

  const chartConfig = {
    count: {
      label: "Joinees",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardDescription>
          Showing total joinees for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ left: -20, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="count"
              type="monotone"
              fill="var(--color-count)"
              fillOpacity={0.4}
              stroke="var(--color-count)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          {chartData?.[0]?.month} - {chartData?.[chartData.length - 1]?.month} 2024
        </div>
      </CardFooter>
    </Card>
  );
}

