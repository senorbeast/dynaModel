import { useRef } from 'react'
import * as THREE from 'three'

function Model({ instances, ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  // const { nodes, materials } = useGLTF('/multi-models.glb') as GLTFResult
  // console.log(materials)
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.USBPort />
      <instances.Moduledefault />
      <group position={[50, 0, 0]}>
        <instances.Modulecamera />
        <instances.Modulecamera1 />
      </group>
      <instances.Modulemotionsensor position={[-35, 0, 0]} />
      <instances.Modulecomputervision position={[0, 0, -50]} />
    </group>
  )
}

export default Model
