import { Html, OrbitControls, Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Phone from './Phone';
import Macbook from './Macbook';
import './ModelForHome.css';

function ModelForHome() {
   function Loader() {
      const { progress } = useProgress();
      return (
         <Html center className="loader">
            {Math.floor(progress)} %
         </Html>
      );
   }
   return (
      <div className="model_for_home">
         <div className="model_for_home_1">
            <Canvas>
               <Suspense fallback={<Loader />}>
                  <Stage environment={'sunset'} intensity={0.7}>
                     <Phone />
                  </Stage>
               </Suspense>

               <OrbitControls
                  minZoom={0.2}
                  autoRotate={true}
                  enableZoom={true}
                  enablePan={false}
                  enableRotate={true}
               />
            </Canvas>
         </div>

         <div className="model_for_home_2">
            <Canvas>
               <Suspense fallback={<Loader />}>
                  <Stage environment={'forest'} intensity={0.7}>
                     <Macbook />
                  </Stage>
               </Suspense>

               <OrbitControls
                  minZoom={0.2}
                  autoRotate={true}
                  enableZoom={true}
                  enablePan={false}
                  enableRotate={true}
               />
            </Canvas>
         </div>
      </div>
   );
}

export default ModelForHome;
