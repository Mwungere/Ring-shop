import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function RingFour(props) {
  const { nodes, materials } = useGLTF('/models/box_1/box-1.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0.016, 0.042, 0.005]} rotation={[0, -0.5, 0]} scale={9.2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.glass}
          position={[-0.001, 0.06, 0.003]}
          rotation={[-Math.PI, -Math.PI / 2.5, -Math.PI]}
          scale={1.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Ring}
          position={[-0.001, 0.045, 0.003]}
          rotation={[-Math.PI, -Math.PI / 2.5, -Math.PI]}

          scale={1.5}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/box_1/box-1.glb');
