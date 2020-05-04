import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionablePath = ({ className, d, style, ...rest }) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { d },
    deps: [d],
    // attrsToTransitionFromInitially: { d: dInitial },
  })

  return (
    <path
      ref={ref}
      className={className}
      d={attrState.d}
      style={style}
      {...rest}
    />
  )
}

export default TransitionablePath
