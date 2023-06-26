import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"


function Editor({data}) {

  var primEls = []
  data.forEach(material => {
    // Append material's prim path.
    primEls.push(
      (
        <tr>
          <td>{material.primPath}</td>
          <td>{material.spec}</td>
        </tr>
      )
    )
    // Append every shaders's prim path.
    material.shaders.forEach(shader => {
      primEls.push(
        <tr>
          <td>{shader.primPath}</td>
          <td>{shader.spec}</td>
        </tr>
      )
    })
  })

  return (
    <div className="editor">
      <div className="editormenu">
        <input 
          type="file" 
          className="file-selector"
          accept=".usd"
          onChange={(e) => {
            const reader = new FileReader()
            reader.addEventListener('load', (e) => {
              const contents = e.target.result
              const lines = contents.split(/\r\n|\n/)
            })
            reader.readAsText(e.target.files[0])
          }} 
        />
      </div>
      <div className="primview">
        <table className="primtable">
          <thead>
            <tr>
              <th colspan="2">Primitives</th>
            </tr>
          </thead>
          <tbody>
            {primEls}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Editor
