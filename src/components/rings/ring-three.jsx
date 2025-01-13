import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function RingThree(props) {
  const { nodes, materials } = useGLTF('/models/ring_3/ring-3.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0.016, 0.042, 0.005]} rotation={[0, -0.5, 0]} scale={1.2}>
        {' '}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.diamond}
          rotation={[0, 1.338, 0]}
          scale={1.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ruby}
          rotation={[0, 1.338, 0]}
          scale={1.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.ring}
          rotation={[0, 1.338, 0]}
          scale={1.5}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/ring_3/ring-3.glb');
