import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { World, Cube, Model, OrbitCamera, useLoop } from 'lingo3d-react'
// https://www.lingo3d.com/documentation/?path=/story/model-model%E6%A8%A1%E5%9E%8B--loaded 

function App() {
  let [position, setPosition] = useState({ x: 0, y: 0, z: 0 })
  let [positionModel, setPositionModel] = useState({ x: 0, y: 0, z: 0 })
  let [walking, setWalking] = useState(false)
  let modelRef = useRef()

  let click = (e) => {
    e.point.y = 0
    setPosition(e.point)
    setWalking(true)
    let model = modelRef.current
    model.lookAt(e.point) // 看某个点
  }
  let handIntersect = () => {
    // console.log(positionModel)
    // console.log(positionModel.x - position.x)
    // console.log(positionModel.z - position.z)
    setWalking(false)
    // setPositionModel(positionModel)
    setPositionModel(positionModel)
  }

  useLoop(() => {
    // 游戏里的帧率
    let model = modelRef.current
    model.moveForward(-100)
  }, walking)
  return (
    <World>
      <Cube width={9999} depth={999} y={-100} onClick={click} /> {/*  */}
      <Model
        ref={modelRef}
        src='Fox.fbx'
        animations={{ idle: 'Idle.fbx', walking: 'Walking.fbx', }}
        animation={walking ? 'walking' : 'idle'}
        intersectIds={['skyblueBox']}
        onIntersect={handIntersect}
        x={positionModel.x} y={positionModel.y} z={positionModel.z}
      /> {/* 模型 支持 Fbx,Glb,Gltf 格式*/}
      <OrbitCamera active z={300} /> {/* 轨道相机 */}
      <Cube id='skyblueBox' scale={0.5} color='skyblue' x={position.x} y={position.y} z={position.z} opacity={0.5} />
    </World>
  )
}

export default App
