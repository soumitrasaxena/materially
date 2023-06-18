import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"

import Material from "./Material"
import Shader from "./Shader"

const material = {
  name: "mouth_mtl",
  primPath: "/skin_0/Looks/mouth_mtl",
  attributes: {
    "token outputs:moonray:surface.connect": "</skin_0/Looks/mouth_mtl/DwaSkinMaterial1_moonray.outputs:surface>"
  },
  type: "UsdMaterial",
  shaders: [
    {
      name: "DwaSkinMaterial1_moonray",
      type: "DwaSkinMaterial",
      primPath: "/skin_0/Looks/mouth_mtl/DwaSkinMaterial1_moonray",
      attributes: {
        "uniform token info:id": "DwaSkinMaterial",
        "float3 inputs:albedo.connect": "</skin_0/Looks/mouth_mtl/ColorCorrectHsvMap1_moonray.outputs:out>",
        "string inputs:diffuse_transmission_blending_behavior": "RGB",
        "bool inputs:enable_sss_input_normal": 1,
        "token inputs:input_normal.connect": "</skin_0/Looks/mouth_mtl/nml_moonray.outputs:out>",
        "float inputs:refractive_index": 1.4,
        "float inputs:roughness": 1,
        "float inputs:roughness.connect": "</skin_0/Looks/mouth_mtl/rgh_moonray.outputs:out>",
        "color3f inputs:scattering_color": [1, 0.28399998, 0.28399998],
        "float inputs:scattering_radius": 0.5,
        "string inputs:specular_model": "GGX",
        "token outputs:surface": "",
        "uniform float2 ui:nodegraph:node:pos": "(6.55941, 0.809715)"
      },
      coord: {
        x: 300,
        y: 100
      }
    },
    {
      name: "ColorCorrectHsvMap1_moonray",
      type: "ColorCorrectHsvMap",
      primPath: "/skin_0/Looks/mouth_mtl/ColorCorrectHsvMap1_moonray",
      attributes: {
        "uniform token info:id": "ColorCorrectHsvMap",
        "float3 inputs:input.connect": "</skin_0/Looks/mouth_mtl/clr_moonray.outputs:out>",
        "float3 outputs:out": "",
        "uniform float2 ui:nodegraph:node:pos": "(0.823854, -0.91829)"
},
      coord: {
        x: 100,
        y: 300
      }
    }
  ],
  coord: {
    x: 100,
    y: 100
  }
}


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


function NodeGraph() {

  const [selectedShader, setSelectedShader] = useState(null)

  const shaders = material.shaders.map(
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
      <Material />
      {shaders}
    </svg>
  )
}

export default NodeGraph
