import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function RingTwo(props) {
  const { nodes: nodesTwo, materials: materialsTwo } = useGLTF('/models/ring_2/ring-2.glb');
  return (
    <group {...props} dispose={null}>
          {/* ring-2 */}
          <group position={[0.016, 0.222, 0.005]} rotation={[-Math.PI / 2, 0, 0.76]} scale={2.5}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.Circle001.geometry}
              material={materialsTwo['White Gold']}
              position={[0, 0, 0.001]}
              scale={[1.016, 0.865, 1.019]}
            />
            <mesh castShadow receiveShadow geometry={nodesTwo.Circle002.geometry} material={materialsTwo.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.dobj.geometry}
              material={materialsTwo.Material_2}
              position={[0, 0, 0.103]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.414}
            />
            <mesh castShadow receiveShadow geometry={nodesTwo.dobj001.geometry} material={materialsTwo.Material_2} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.dobj003.geometry}
              material={materialsTwo.Material_2}
              position={[0.036, 0, -0.071]}
              rotation={[0.125, 0.942, 0.329]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.Prong001.geometry}
              material={materialsTwo['White Gold']}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            />
            <mesh castShadow receiveShadow geometry={nodesTwo.Circle.geometry} material={materialsTwo.material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.Circle006.geometry}
              material={materialsTwo['White Gold']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodesTwo.Circle006.geometry}
              material={materialsTwo['White Gold 2']}
            />
          </group>
        </group>
  );
}

useGLTF.preload('/models/ring_2/ring-2.glb');
