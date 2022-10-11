import { useState, useRef } from 'react'
import { Lingo, World, Cube, Model, OrbitCamera, useLoop, ThirdPersonCamera, Skybox, useKeyboard } from 'lingo3d-react'

function App() {
  let cube = new Lingo.Cube()
  cube.color = 'green'
  cube.onLoop = () => {
    cube.rotationX += 1
    cube.rotationY += 1
  }
  return (
    <World>
      <cube />
    </World>
  )
}

export default App
