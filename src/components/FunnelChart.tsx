// src/components/FunnelChart.tsx
import React from "react"
import { ResponsiveFunnel } from "@nivo/funnel"

interface FunnelData {
  id: string
  value: number
}

const data: FunnelData[] = [
  { id: "Targeted Recipients", value: 447942 },
  { id: "Unique Messages Sent", value: 445320 },
  { id: "Delivered Messages", value: 212490 },
  { id: "Unique Clicks", value: 27071 },
  { id: "Donations", value: 1094 },
]

const FunnelChart: React.FC = () => (
  <ResponsiveFunnel
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    valueFormat=">-,"
    colors={{ scheme: "nivo" }}
    borderWidth={20}
    labelColor={{ from: "color", modifiers: [["darker", 3]] }}
    beforeSeparatorLength={100}
    beforeSeparatorOffset={20}
    afterSeparatorLength={100}
    afterSeparatorOffset={20}
    currentPartSizeExtension={20}
    currentBorderWidth={40}
    motionConfig="wobbly"
  />
)

export default FunnelChart
