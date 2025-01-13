import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BoxOne(props) {
  const { nodes, materials } = useGLTF('/models/box_1/box-1.glb')
  return (
    <group {...props} dispose={null} scale={6}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0.103, -0.007]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.glass}
        position={[-0.001, 0.083, 0.003]}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.Ring}
        position={[-0.001, 0.075, 0.003]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['Leather.001']}
        position={[-0.001, 0.068, 0.003]}
      />
    </group>
  )
}

useGLTF.preload('/models/box_1/box-1.glb')
