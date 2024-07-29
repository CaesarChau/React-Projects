import React from 'react'
import Hexagon from "react-hexagon"

function HoverHexagon(props) {
    console.log(props)
  return (
    <Hexagon
      style={props.style}
      className={props.className}
      hexClassName={props.hexClassName}
      hexProps={{
        onMouseEnter: props.onEnter,
        onMouseLeave: props.onLeave
      }}
    />
  )
}

const propTypes = React.PropTypes
HoverHexagon.propTypes = {
  style: propTypes.object,
  children: propTypes.node,
  className: propTypes.string,
  hexClassName: propTypes.string,
  onEnter: propTypes.func,
  onLeave: propTypes.func
}

export default HoverHexagon