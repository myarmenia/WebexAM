import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Stage, Stars, useProgress } from '@react-three/drei';
import Merc from '../models/Merc';
import { useTranslation } from 'react-i18next';

const Universe = () => {
   const [zoom, setZoom] = useState(false);
   const [color, setColor] = useState();
   const [show, setShow] = useState(true);

   const { t, i18n } = useTranslation();

   function Loader() {
      const { progress } = useProgress();
      return (
         <Html center className="loader">
            {Math.floor(progress)} %
         </Html>
      );
   }

   return (
      <div className="universeScene">
         <Canvas>
            <OrbitControls maxDistance={500} autoRotate={true} enableZoom={zoom} />
            <Stars />
            <Suspense fallback={<Loader />}>
               <Stage environment={'sunset'} intensity={0.7} shadows={'contact'}>
                  <Merc customColor={color} show={show} />
               </Stage>
            </Suspense>
         </Canvas>
         <div style={{ position: 'absolute', top: '3874px', right: '10' }}>
            <button
               style={{
                  backgroundColor: zoom ? '#b378eb' : 'blueviolet',
                  padding: '20',
                  fontSize: 16,
                  cursor: 'pointer',
                  width: '150px',
               }}
               onClick={() => {
                  setZoom(!zoom);
               }}>
               {zoom ? t('canvas3D.0') : t('canvas3D.1')}
            </button>

            <div>
               {/* <input type="color" onChange={(e) => setColor(e.currentTarget.value)} /> */}
            </div>
         </div>
      </div>
   );
};

export default Universe;
