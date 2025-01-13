import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BoxOne(props) {
  const { nodes, materials } = useGLTF('/models/box_1/box-1.glb')
  return (
    <group {...props} dispose={null} scale={6.5} position={[0.098, 0, 0.07]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0.067, -0.007]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}


      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['Leather.001']}
        position={[-0.01, 0.034, -0.011]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/models/box_1/box-1.glb')
