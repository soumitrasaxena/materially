import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"

import Details from "./Details.js"
import Editor from "./Editor.js"
import NodeGraph from "./NodeGraph.js"

import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        materially
      </header>
      <main className="content">
        <Editor />
        <NodeGraph />
        <Details />
      </main>
      <footer className="footer">
      </footer>
    </div>
    
  )
}

export default App
