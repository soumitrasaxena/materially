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

const shader = material.shaders[0]

function Attribute({attribute}) {
  return (
    <g
      className="attr"
    >
      <circle 
        cx="100"
        cy="140"
        r="4"
        className="attr-circle-out"
      />
      <circle 
        cx="100"
        cy="140"
        r="2"
        className="attr-circle-in"
      />
    </g>
  )
}

function ShaderIcon({shader}) {
  return (
    <g
      className="shader-icon"
    >
      <rect
        x={shader.coord.x + 2}
        y={shader.coord.y + 2}
        width="20"
        height="15"
        className="shader-icon-background"
      />
      <text
        x={shader.coord.x + 12}
        y={shader.coord.y + 13}
        className="shader-icon-label"
      >
        S
      </text>
    </g>
  )
}

function Shader({shader, isSelected, onClick}) {

  const inputEls = []
  for (const key in shader.attributes){
    if (key.includes("inputs:") && key.includes(".connect")){
      console.log(key)
    }
  }


  function getElidedText(text) {
    if (text.length >= 18){
      return `${text.substring(0, 14)}...`
    } else {
      return text
    }
  }

  return (
    <g 
      className="shader"
      pointerEvents="bounding-box"
      cursor="pointer"
      onClick={onClick}
    >
      <rect
        x={shader.coord.x}
        y={shader.coord.y}
        width="120"
        height="60"
        className={
          isSelected ? "shader-background--selected" : 
          "shader-background"
        }
      />
      <text
        x={shader.coord.x}
        y={shader.coord.y + 70}
        className="shader-coord"
      >
        {`${shader.coord.x}, ${shader.coord.y}`}
      </text>
      <text
        x={shader.coord.x + 60}
        y={shader.coord.y - 2}
        className="shader-name"
      >
        {shader.name}
      </text>
      <rect
        x={shader.coord.x}
        y={shader.coord.y}
        width="120"
        height="20"
        className={
          isSelected ? "shader-header--selected" : 
          "shader-header"
        }
      />
      <ShaderIcon shader={shader}/>
      <text
        x={shader.coord.x + 120 - 2 }
        y={shader.coord.y + 13}
        className="shader-type"
      >
        {getElidedText(shader.type)}
      </text>
      <Attribute />
    </g>
  )
}

export default Shader
