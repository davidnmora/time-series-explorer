import React from 'react'
import useD3Transition from 'use-d3-transition'

const TransitionablePath = ({ className, d, style, ...rest }) => {
  const { ref, attrState } = useD3Transition({
    attrsToTransitionTo: { d, 'stroke-dashoffset': rest['stroke-dashoffset'] },
    deps: [d, rest['stroke-dashoffset']],
    attrsToTransitionFromInitially: { d, 'stroke-dashoffset': 300 },
    duration: 2000,
  })
  const dashOffset = {
    'stroke-dashoffset': attrState['stroke-dashoffset'],
  }
  return (
    <path
      {...rest}
      ref={ref}
      className={className}
      d={attrState.d}
      style={style}
      {...dashOffset}
    />
  )
}

export default TransitionablePath
