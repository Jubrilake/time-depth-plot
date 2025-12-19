"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function DepthPlot() {
  // Combine the data for plotting
  const plannedData = [
    { days: 0, depth: 0 },
    { days: 5, depth: 2000 },
    { days: 10, depth: 5000 },
    { days: 15, depth: 8360 },
  ]

  const actualData = [
    { days: 0, depth: 0 },
    { days: 6, depth: 1800 },
    { days: 12, depth: 4800 },
    { days: 18, depth: 8100 },
  ]

  // Create combined dataset for the chart
  const allDays = [...new Set([...plannedData.map((d) => d.days), ...actualData.map((d) => d.days)])].sort(
    (a, b) => a - b,
  )

  const chartData = allDays.map((day) => {
    const planned = plannedData.find((d) => d.days === day)
    const actual = actualData.find((d) => d.days === day)
    return {
      days: day,
      planned: planned?.depth,
      actual: actual?.depth,
    }
  })

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Question FE-2: Planned vs Actual Time–Depth Plot</CardTitle>
            <CardDescription>Comparing planned drilling timeline against actual progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="days"
                    label={{ value: "Time (days)", position: "insideBottom", offset: -5 }}
                    className="text-foreground"
                  />
                  <YAxis
                    label={{ value: "Depth (ft)", angle: -90, position: "insideLeft" }}
                    reversed
                    className="text-foreground"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    formatter={(value: number) => [`${value} ft`, ""]}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="planned"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Planned"
                    connectNulls
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="Actual"
                    connectNulls
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold text-lg mb-2">Planned Timeline</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {plannedData.map((item, idx) => (
                    <li key={idx}>
                      Day {item.days}: {item.depth.toLocaleString()} ft
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold text-lg mb-2">Actual Timeline</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {actualData.map((item, idx) => (
                    <li key={idx}>
                      Day {item.days}: {item.depth.toLocaleString()} ft
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
