import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionableFieldTooltipWrapper = ({
  children,
  fieldName,
  x,
  y,
  width,
  height,
}) => {
  const isOnLeftSideOfRadialChart = Math.floor(x) < 0
  const dx = isOnLeftSideOfRadialChart ? -0.9 * width : 0
  const dy = -10

  const _x = x + dx
  const _y = y + dy

  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { x: _x, y: _y },
    deps: [_x, _y],
  })

  return (
    <foreignObject
      ref={ref}
      x={attrState._x}
      y={attrState._y}
      width={width}
      height={height}
    >
      {children}
    </foreignObject>
  )
}

export default TransitionableFieldTooltipWrapper
