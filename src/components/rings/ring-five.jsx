import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RingFive(props) {
  const { nodes, materials } = useGLTF('/models/ring_5/ring-5.glb')
  console.log('Nodes:', nodes);

  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0'
            ].geometry
          }
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0_1'
            ].geometry
          }

          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0_2'
            ].geometry
          }
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0_3'
            ].geometry
          }
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0_4'
            ].geometry
          }
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes[
              'COLOR=\u007f\u007f\u007f_MATERIAL=\u007f\u007f\u007f_\u007f\u007f\u007f_\u007f\u007f\u007f_Material_1_0_5'
            ].geometry
          }
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2_Material_3_0.geometry}
          material={materials.Material_3}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ring_5/ring-5.gltf')
