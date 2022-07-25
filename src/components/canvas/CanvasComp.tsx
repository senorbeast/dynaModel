import { Environment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import Wrapper from './Wrapper'
import { PresentationControls } from '@react-three/drei'

const CanvasComp = () => {
  useThree(({ camera }) => {
    camera.position.z = 75
    camera.position.y = 55
    camera.position.x = 55
  })
  return (
    <>
      <Environment preset='sunset' background />
      <PresentationControls
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 12 }} // Spring config
      >
        <Wrapper></Wrapper>
        <ambientLight intensity={0.9}></ambientLight>
      </PresentationControls>
    </>
  )
}
export default CanvasComp
