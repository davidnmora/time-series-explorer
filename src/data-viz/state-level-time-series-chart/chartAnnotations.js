const dateToInteger = (monthNum, day = 0, daysInMonth = 31) =>
  `${monthNum + day / daysInMonth}`

export const FIRST_CASE = {
  type: 'x',
  xVal: dateToInteger(3, 10, 31), // March 10
  note: {
    label: 'First case',
    align: 'middle',
    lineType: null,
    wrap: 100,
  },
  // color: CORI_COLORS.maroon,
  dy: -12,
  dx: 0,
  connector: { end: 'none' },
}

export const STAY_AT_HOME_ORDER = {
  className: 'stay-at-home-order',
  type: 'bounds',
  bounds: [
    { xVal: dateToInteger(3, 24, 31) },
    { xVal: dateToInteger(5, 28, 31) },
  ],
  label: 'Stay at home order',
  dx: 96,
  // color: CORI_COLORS.maroon,
}
