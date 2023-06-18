import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"


function EditorMenu() {
  return (
    <div className="editormenu">
      <button>Upload</button>
    </div>
  )
}


function EditorTextArea() {
  return (
    <div className="editortextarea">
      <textarea></textarea>
    </div>
  )
}


function Editor() {
  return (
    <div className="editor">
      <EditorMenu />
      <EditorTextArea />
    </div>
  )
}

export default Editor
