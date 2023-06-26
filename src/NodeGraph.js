import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"

import Material from "./Material"
import Shader from "./Shader"


function Grid() {
  return (
    <g className="grid">
      <defs>
        <pattern 
          id="smallGrid" 
          width="8" 
          height="8" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M 8 0 L 0 0 0 8" 
            fill="none" 
            stroke="gray" 
            strokeWidth="0.5"
          />
        </pattern>
        <pattern 
          id="grid" 
          width="80" 
          height="80" 
          patternUnits="userSpaceOnUse"
        >
          <rect 
            width="80" 
            height="80" 
            fill="url(#smallGrid)"
          />
          <path 
            d="M 80 0 L 0 0 0 80" 
            fill="none" 
            stroke="gray" 
            strokeWidth="1"
          />
        </pattern>
      </defs>  
      <rect width="100%" height="100%" fill="url(#grid)" />
    </g>
  )  
}


function NodeGraph({data}) {

  const [selectedShader, setSelectedShader] = useState(null)

  // TODO: Decide what material is being shown instead of 0
  const shaders = data[0].shaders.map(
    shader => {
      return (
        <Shader 
          key={shader.primPath}
          shader={shader}
          isSelected={selectedShader === shader.primPath}
          onClick={() => setSelectedShader(shader.primPath)}
        />
      )
    }
  )

  return (
    <svg className="nodegraph">
      <Grid />
      {/* <Material /> */}
      {shaders}
    </svg>
  )
}

export default NodeGraph
