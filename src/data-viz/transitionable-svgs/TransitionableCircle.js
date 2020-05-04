import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionableCircle = ({
  className,
  r,
  cx,
  cy,
  cxInitial,
  cyInitial,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { cx, cy },
    deps: [cx, cy],
    attrsToTransitionFromInitially: { cx: cxInitial, cy: cyInitial },
  })

  return (
    <circle
      ref={ref}
      className={className}
      r={r}
      cx={attrState.cx}
      cy={attrState.cy}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}

export default TransitionableCircle
