# Planned vs Actual Time–Depth Plot (FE-2)

## 📌 Overview

This task focuses on visualizing **planned vs actual drilling progress** over time using a **time–depth plot**. The chart compares expected depth milestones against real execution data, making it easy to identify delays, deviations, and performance gaps.

The emphasis is on **accurate data mapping**, **clear visual comparison**, and **readable chart design**.

---

## 🎯 Problem Statement

Plot **planned vs actual depth vs time** using the following dataset:

```json
{
  "planned": { "days": [0, 5, 10, 15], "depth": [0, 2000, 5000, 8360] },
  "actual": { "days": [0, 6, 12, 18], "depth": [0, 1800, 4800, 8100] }
}
```

---

## 📊 Visualization Approach

### Chart Type

* **Line chart**
* X-axis: Time (Days)
* Y-axis: Depth
* Two distinct series:

  * Planned depth
  * Actual depth

### Design Considerations

* Clearly labeled axes and legend
* Distinct line styles or markers for planned vs actual
* Gridlines to improve readability
* Tooltips for precise data inspection

---

## 🛠️ Tech Stack

> *(Adjust as needed)*

* **Framework:** Next.js
* **Charts:** Recharts
* **Styling:** Tailwind CSS
---

## 📂 Project Structure

```bash
src/
├── components/
│   └── TimeDepthChart.tsx
├── data/
│   └── timeDepthData.ts
├── pages/
│   └── index.tsx
```

---

## 🚀 Running the Project

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000` to view the plot.

---

## 📈 Interpretation

* The **actual curve** lags behind the **planned curve**, indicating slower-than-expected progress.
* Increasing divergence over time highlights cumulative delays.
* This visualization helps stakeholders quickly assess performance risk.

---

## 🔄 Assumptions & Trade-offs

* Data points are assumed to be accurate and sequential.
* Interpolation between points is linear.
* Static data is used to focus on visualization rather than data fetching.

---

## 🔮 Possible Enhancements

* Highlight variance between planned and actual depth
* Add annotations for major milestones
* Support dynamic or real-time data
* Allow zooming and panning for detailed inspection

---

## 👤 Author

**Adebayo Akerele**
Frontend Developer

