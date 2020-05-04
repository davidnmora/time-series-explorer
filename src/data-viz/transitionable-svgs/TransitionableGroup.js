import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionableGroup = ({ children, opacity, ...attrProps }) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { opacity },
    deps: [opacity],
    attrsToTransitionFromInitially: { opacity: 0 },
  })

  return (
    <g ref={ref} {...attrProps} opacity={attrState.opacity}>
      {children}
    </g>
  )
}

export default TransitionableGroup
