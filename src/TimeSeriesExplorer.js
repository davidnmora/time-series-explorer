import React from 'react'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'

const frameProps = {
  data: [
    { name: 'New York', color: '#ac58e5', year: 2011, value: 17.9 },
    { name: 'Las Vegas', color: '#E0488B', year: 2011, value: 18.7 },
    { name: 'San Diego', color: '#9fd0cb', year: 2011, value: 18.9 },
    { name: 'Denver', color: '#e0d33a', year: 2011, value: 27.4 },
    { name: 'Oakland', color: '#7566ff', year: 2011, value: 30.5 },
    { name: 'New York', color: '#ac58e5', year: 2015, value: 17.2 },
    { name: 'Las Vegas', color: '#E0488B', year: 2015, value: 13.9 },
    { name: 'San Diego', color: '#9fd0cb', year: 2015, value: 16.1 },
    { name: 'Denver', color: '#e0d33a', year: 2015, value: 26.6 },
    { name: 'Oakland', color: '#7566ff', year: 2015, value: 37.2 },
  ],
  size: [500, 450],
  margin: { left: 40, top: 50, bottom: 75, right: 120 },
  type: {
    type: 'point',
    r: function () {
      return 5
    },
  },
  connectorType: function (e) {
    return e.name
  },
  oAccessor: 'year',
  rAccessor: 'value',
  rExtent: [0],
  style: function (e) {
    return { fill: e.color, stroke: 'white', strokeOpacity: 0.5 }
  },
  connectorStyle: function (e) {
    return {
      fill: e.source.color,
      stroke: e.source.color,
      strokeOpacity: 0.5,
      fillOpacity: 0.5,
    }
  },
  title: '% of Adults Who Binge Drink',
  foregroundGraphics: [
    <g transform="translate(440, 73)" key="legend">
      <text key={1} fill={'#ac58e5'}>
        New York
      </text>
      <text key={1} y={20} fill={'#E0488B'}>
        Las Vegas
      </text>
      <text key={1} y={40} fill={'#9fd0cb'}>
        San Diego
      </text>
      <text key={1} y={60} fill={'#e0d33a'}>
        Denver
      </text>
      <text key={1} y={80} fill={'#7566ff'}>
        Oakland
      </text>
    </g>,
  ],
  axes: [
    {
      orient: 'left',
      tickFormat: function (e) {
        return e + '%'
      },
      baseline: false,
      label: { name: 'Adults Who Binge Drink' },
    },
    {
      tickFormat: function (e) {
        return e + '%'
      },
      baseline: false,
      orient: 'right',
    },
  ],
  oLabel: true,
}

export default () => {
  return <OrdinalFrame {...frameProps} />
}
