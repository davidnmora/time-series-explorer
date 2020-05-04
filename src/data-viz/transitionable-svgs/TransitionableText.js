import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionableText = ({ children, x, y, ...attrProps }) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { x, y },
    deps: [x, y],
  })

  return (
    <text {...attrProps} ref={ref} x={attrState.x} y={attrState.y}>
      {children}
    </text>
  )
}

export default TransitionableText
