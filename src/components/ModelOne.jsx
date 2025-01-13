import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RingTwo } from './rings/ring-two';
import { RingOne } from './rings/ring-one';
import { RingThree } from './rings/ring-three';
import { RingFive } from './rings/ring-five';
import { BoxOne } from './boxes/box-one';
import { RingFour } from './rings/ring-four';
import { BoxTwo } from './boxes/box-two';

export function ModelOne({activeRing, activeBox}, ...props) {
  console.log("activeRing in model is", activeRing);
  
  const { nodes: nodesOne, materials: materialsOne } = useGLTF('/models/ring_1/ring_white.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[-0.225, 0.534, -0.216]}>
        <group position={[0.225, -0.534, 0.216]} scale={1.626}>

          {/* ring-1 */}
        
          {activeRing == 0 && <RingOne />}

          {/* ring-2 */}
          {activeRing == 1 && <RingTwo />}

          {/* ring-3 */}
          {activeRing == 2 && <RingThree />}

          {/* ring four */}
          {activeRing == 3 && <RingFour />}

          {/* box one */}

          {activeBox == 0 && <BoxOne />}

          {/* box two */}

          {activeBox == 1 && <BoxTwo /> }

        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/ring_1/ring_white.glb');
