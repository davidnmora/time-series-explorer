import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const SAMPLE_DATA = [
  {
    id: 'japan',
    color: 'hsl(346, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 40,
      },
      {
        x: 'helicopter',
        y: 11,
      },
      {
        x: 'boat',
        y: 249,
      },
      {
        x: 'train',
        y: 117,
      },
      {
        x: 'subway',
        y: 19,
      },
      {
        x: 'bus',
        y: 184,
      },
      {
        x: 'car',
        y: 206,
      },
      {
        x: 'moto',
        y: 75,
      },
      {
        x: 'bicycle',
        y: 270,
      },
      {
        x: 'horse',
        y: 170,
      },
      {
        x: 'skateboard',
        y: 158,
      },
      {
        x: 'others',
        y: 222,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(183, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 215,
      },
      {
        x: 'helicopter',
        y: 82,
      },
      {
        x: 'boat',
        y: 29,
      },
      {
        x: 'train',
        y: 69,
      },
      {
        x: 'subway',
        y: 161,
      },
      {
        x: 'bus',
        y: 87,
      },
      {
        x: 'car',
        y: 177,
      },
      {
        x: 'moto',
        y: 215,
      },
      {
        x: 'bicycle',
        y: 153,
      },
      {
        x: 'horse',
        y: 120,
      },
      {
        x: 'skateboard',
        y: 95,
      },
      {
        x: 'others',
        y: 19,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(1, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 294,
      },
      {
        x: 'helicopter',
        y: 137,
      },
      {
        x: 'boat',
        y: 142,
      },
      {
        x: 'train',
        y: 184,
      },
      {
        x: 'subway',
        y: 179,
      },
      {
        x: 'bus',
        y: 174,
      },
      {
        x: 'car',
        y: 124,
      },
      {
        x: 'moto',
        y: 42,
      },
      {
        x: 'bicycle',
        y: 202,
      },
      {
        x: 'horse',
        y: 185,
      },
      {
        x: 'skateboard',
        y: 204,
      },
      {
        x: 'others',
        y: 130,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(180, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 91,
      },
      {
        x: 'helicopter',
        y: 12,
      },
      {
        x: 'boat',
        y: 76,
      },
      {
        x: 'train',
        y: 287,
      },
      {
        x: 'subway',
        y: 158,
      },
      {
        x: 'bus',
        y: 141,
      },
      {
        x: 'car',
        y: 29,
      },
      {
        x: 'moto',
        y: 100,
      },
      {
        x: 'bicycle',
        y: 93,
      },
      {
        x: 'horse',
        y: 209,
      },
      {
        x: 'skateboard',
        y: 223,
      },
      {
        x: 'others',
        y: 272,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(343, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 78,
      },
      {
        x: 'helicopter',
        y: 12,
      },
      {
        x: 'boat',
        y: 29,
      },
      {
        x: 'train',
        y: 112,
      },
      {
        x: 'subway',
        y: 76,
      },
      {
        x: 'bus',
        y: 14,
      },
      {
        x: 'car',
        y: 70,
      },
      {
        x: 'moto',
        y: 132,
      },
      {
        x: 'bicycle',
        y: 54,
      },
      {
        x: 'horse',
        y: 147,
      },
      {
        x: 'skateboard',
        y: 200,
      },
      {
        x: 'others',
        y: 172,
      },
    ],
  },
]

export const StateLevelTimeSeriesChart = ({ data = SAMPLE_DATA }) => (
  <div style={{ height: 400, width: 600 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
)
