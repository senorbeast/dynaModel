/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Glass: THREE.Mesh
    Plastic: THREE.Mesh
    Wood: THREE.Mesh
    Metal: THREE.Mesh
  }
  materials: {
    Glass_Material: THREE.MeshStandardMaterial
    Plastic_Material: THREE.MeshStandardMaterial
    Wood_Material: THREE.MeshStandardMaterial
    Metal_Material: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/ALL_MATERIALS.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Glass.geometry} material={materials.Glass_Material} scale={[0.4, 1, 0.4]} />
      <mesh geometry={nodes.Plastic.geometry} material={materials.Plastic_Material} position={[-25, 0, 0]} scale={[0.4, 1, 0.4]} />
      <mesh geometry={nodes.Wood.geometry} material={materials.Wood_Material} position={[25, 0, 0]} scale={[0.4, 1, 0.4]} />
      <mesh geometry={nodes.Metal.geometry} material={materials.Metal_Material} position={[50, 0, 0]} scale={[0.4, 1, 0.4]} />
    </group>
  )
}

useGLTF.preload('/ALL_MATERIALS.glb')