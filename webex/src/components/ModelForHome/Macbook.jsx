

import { useGLTF } from '@react-three/drei'

export default function Macbook(props) {
  const { nodes, materials } = useGLTF('/macbook-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/macbook-transformed.glb')
