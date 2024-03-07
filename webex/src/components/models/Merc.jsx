import { useGLTF } from '@react-three/drei';

export default function Merc(props) {
   const { nodes, materials } = useGLTF('/merc-transformed.glb');
   return (
      <group {...props} dispose={null}>
         <mesh
            geometry={nodes.sw222_engine_2_sw222_main_alt_2_0.geometry}
            material={materials.PaletteMaterial001}
            position={[-0.009, 0.765, 1.478]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
         <mesh
            geometry={nodes.sw222_mirror_L_sw222_paint_0.geometry}
            material-color={props.customColor}
            material={materials.PaletteMaterial002}
            position={[0.933, 1.039, 0.427]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
         <mesh
            geometry={nodes.sw222_mirror_L_sw222_glass_0.geometry}
            material={materials.PaletteMaterial003}
            position={[0.933, 1.039, 0.427]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
         <mesh
            geometry={nodes.sw222_taillightglass_R_2017_glass004_0.geometry}
            material={materials.PaletteMaterial004}
            position={[-0.708, 0.855, -2.414]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
         <mesh
            geometry={nodes.sw222_taillightframe_R_2017_sw222_vehiclelights_0.geometry}
            material={materials.PaletteMaterial005}
            position={[-0.68, 0.842, -2.426]}
            rotation={[-Math.PI / 2, 0, 0]}
         />
      </group>
   );
}

useGLTF.preload('/merc-transformed.glb');
