import React, {Suspense, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Html, OrbitControls, Stage, Stars, useProgress} from "@react-three/drei";
import Merc from "../models/Merc";


const Universe = () => {
    const [zoom, setZoom] = useState(false);
    const [color, setColor] = useState();
    const [show, setShow] = useState(true);


    function Loader() {
        const {progress} = useProgress()
        return <Html center className='loader'>{Math.floor(progress)} %</Html>
    }

    return (
        <div className='universeScene'>
            <Canvas>
                <OrbitControls maxDistance={500} autoRotate={true} enableZoom={zoom}/>
                <Stars />
                <Suspense fallback={<Loader/>}>
                    <Stage environment={"sunset"} intensity={0.7} shadows={"contact"}>
                        <Merc customColor={color} show={show}/>
                    </Stage>
                </Suspense>
            </Canvas>
            <div style={{position: 'absolute', top: '0', right: '0'}}>
                <button
                    style={{backgroundColor: zoom ? 'red' : 'blueviolet', padding: '20', fontSize: 30, cursor: 'pointer'}}
                    onClick={() => {
                        setZoom(!zoom)
                    }}
                >
                    {zoom ? 'Exit' : 'Start'}
                </button>

                <div>
                    <input type="color" onChange={(e) => setColor(e.currentTarget.value)}/>
                </div>
            </div>
        </div>
    );
};

export default Universe;