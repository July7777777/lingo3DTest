import { useState, useRef } from 'react'
import { World, Cube, Model, OrbitCamera, useLoop, ThirdPersonCamera, Skybox, useKeyboard } from 'lingo3d-react'

function App() {

  const key = useKeyboard()
  const role = useRef()

  useLoop(() => {// 帧率
    role.current.moveForward(-10)
  }, key === "w")

  return (

    <World>
      <Skybox texture='skybox.jpg' />{/* 天空 */}

      <Model src='Grassland.glb' scale={280} physics={'map'} />{/* 大地 */}

      <ThirdPersonCamera active mouseControl>
        <Model
          ref={role}
          src='girl-Tpos.fbx'
          animations={{ idle: 'standingIdle.fbx', walking: 'Running.fbx', }}
          animation={key === "w" ? 'walking' : 'idle'}
          intersectIds={['skyblueBox']}
          physics={'character'}
        /> {/* 模型 支持 Fbx,Glb,Gltf 格式*/}
      </ThirdPersonCamera>

    </World>

  )
}

export default App
