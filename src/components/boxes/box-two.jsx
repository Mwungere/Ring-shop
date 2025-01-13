import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BoxTwo(props) {
  const { nodes, materials } = useGLTF('/models/ring_1/ring_white.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
            castShadow
            receiveShadow
            geometry={nodes.item01.geometry}
            material={materials['335_Mystic_Black_Pearl']}
            rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
            scale={17.534}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.item02.geometry}
            material={materials['001_718_Crystal_Red_Coral_Pearl']}
            position={[0, 0.003, 0]}
            rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
            scale={17.534}
          />
    </group>
  )
}

useGLTF.preload('/models/ring_1/ring_white.glb')
