import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"

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


function MaterialIcon() {
  return (
    <g
      className="material-icon"
    >
      <rect
        x={material.coord.x + 2}
        y={material.coord.y + 2}
        width="20"
        height="15"
        className="material-icon-background"
      />
      <text
        x={material.coord.x + 12}
        y={material.coord.y + 13}
        className="material-icon-label"
      >
        M
      </text>
    </g>
  )
}

function Material() {
  return (
    <g 
      className="material"
    >
      <text
        x={material.coord.x}
        y={material.coord.y + 45 }
        className="material-coord"
      >
        {`${material.coord.x}, ${material.coord.y}`}
      </text>
      <text
        x={material.coord.x + 60}
        y={material.coord.y - 2}
        className="material-name"
      >
        {material.name}
      </text>
      <rect
        x={material.coord.x}
        y={material.coord.y}
        width="120"
        height="60"
        className="material-background"
      />
      <rect
        x={material.coord.x}
        y={material.coord.y}
        width="120"
        height="20"
        className="material-header"
      />
      <MaterialIcon />
      <text
        x={material.coord.x + 120 - 2 }
        y={material.coord.y + 13}
        className="material-type"
      >
        {material.type}
      </text>
    </g>
  )
}

export default Material
