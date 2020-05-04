import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionableLine = ({ className, x1, y1, x2, y2, ...attrProps }) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { x1, y1, x2, y2 },
    deps: [x1, y1, x2, y2],
  })

  return (
    <line
      ref={ref}
      {...attrProps}
      x1={attrState.x1}
      y1={attrState.y1}
      x2={attrState.x2}
      y2={attrState.y2}
    />
  )
}

export default TransitionableLine
