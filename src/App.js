import * as d3 from "d3"
import { useState, useEffect, useRef } from "react"

import Details from "./Details.js"
import Editor from "./Editor.js"
import NodeGraph from "./NodeGraph.js"

import './App.css'

import { data } from "./data.js"

function App() {
  return (
    <div className="app">
      <header className="header">
        materially
      </header>
      <main className="content">
        <Editor data={data}/>
        <NodeGraph data={data}/>
        <Details data={data}/>
      </main>
      <footer className="footer">
      </footer>
    </div>
    
  )
}

export default App
