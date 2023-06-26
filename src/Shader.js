import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"


function getElidedText(text, elideLength=18) {
  if (text.length >= elideLength){
    return `${text.substring(0, elideLength - 4)}...`
  } else {
    return text
  }
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


function Attribute({attribute, cx, cy, dx=0, dy=0, textclass="attr-text-input"}) {
  
  const namespaceless = attribute.key.split(':')[attribute.key.split(':').length - 1]
  const displayname = namespaceless.split('.connect')[0]

  return (
    <g
      className="attr"
    >
      <circle 
        cx={cx}
        cy={cy}
        r="4"
        className="attr-circle-out"
      />
      <circle 
        cx={cx}
        cy={cy}
        r="2"
        className="attr-circle-in"
      />
      <text
        x={cx + dx}
        y={cy + dy}
        className={textclass}
      >
        {getElidedText(displayname, )}
      </text>
    </g>
  )
}


function Shader({shader, isSelected, onClick}) {

  const inputEls = []
  const outputEls = []

  // Figure out the height of the input and output elements.
  var inputHeight = 40
  var outputHeight = 40
  
  var inputCounter = 0
  var outputCounter = 0
  for (const attr of shader.attributes){
    if (attr.key.includes("inputs:")){
      inputEls.push((
        <Attribute
          key={attr.key} 
          attribute={attr}
          cx={shader.coord.x}
          cy={shader.coord.y + 40 + inputCounter * 12}
          dx={10}
          dy={3} 
          textclass='attr-text-input'
        />
      ))
      inputCounter = inputCounter + 1
    }
    if (attr.key.includes("outputs:")){
      outputEls.push((
        <Attribute 
          key={attr.key} 
          attribute={attr}
          cx={shader.coord.x + 120}
          cy={shader.coord.y + 40 + outputCounter * 12}
          dx={-10}
          dy={3}
          textclass='attr-text-output' 
        />
      ))
      outputCounter = outputCounter + 1
    }
  }
  // Font size for attribute text is 12px.
  // TODO: Get the 12px font size from the CSS.
  inputHeight = inputHeight + 12 * inputCounter  
  outputHeight = outputHeight + 12 * outputCounter

  // The higher number should be the height of the shader rect.
  var height = inputHeight >= outputHeight ? inputHeight : outputHeight

  // Add 20px padding to the height
  height = height + 20
  
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
        height={height}
        className={
          isSelected ? "shader-background--selected" : 
          "shader-background"
        }
      />
      <text
        x={shader.coord.x}
        y={shader.coord.y + height + 5}
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
      {inputEls}
      {outputEls}
    </g>
  )
}

export default Shader
