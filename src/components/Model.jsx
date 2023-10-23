/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useState , useEffect , useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Pane } from "tweakpane";
import { Mesh } from "./Mesh";
import { baseColors, labels } from "../constants/labels";

const pane = new Pane();

export function Model(props) {
    const { nodes, materials } = useGLTF("/bot.gltf");
    const [mats,setMats] = useState({})
    const group = useRef();
    
    useEffect(() => {
        Object.entries(materials).map(material => {
            const color = baseColors[material[0]] || {r:0,g:0,b:0};
            console.log(color)
            setMats(mats => ({...mats,[material[0]]:{...material[1],color:{...material[1].color,...color}}}))
            const { r, g, b} = color
            let colors = { [labels[[material[0]]]]: {r,g,b}}
            pane.addBinding(colors,labels[material[0]])
            .on('change',ev => {
                setMats(mats => (mats = {...mats,[material[0]]:{...material[1],color:{...material[1].color,...ev.value}}}))
            });
        });
    }, [])
    console.log(mats)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">        
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="e8420c77600640cf915a0048601daa00fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                    <group name="Object_2">
                        <group name="RootNode">
                            <group name="Null_1">
                                <group
                                    name="body"
                                    position={[0, -5.033, -17.95]}
                                    scale={[1.843, 1.427, 2.515]}
                                >
                                    <Mesh 
                                        name="body_Mat1_0" 
                                        geometry={nodes.body_Mat1_0.geometry} 
                                        material={mats["Mat.1"]} 
                                    />
                                    <Mesh 
                                        name="body_Mat1_0001" 
                                        geometry={nodes.body_Mat1_0001.geometry}
                                        material={mats["Mat.1"]} 
                                    />
                                    <Mesh 
                                        name="body_Mat1_0002" 
                                        geometry={nodes.body_Mat1_0002.geometry}
                                        material={mats["Mat.1"]} 
                                    />
                                    <Mesh 
                                        name="body_Mat1_0003" 
                                        geometry={nodes.body_Mat1_0001.geometry}
                                        material={mats["Mat.1_1"]} 
                                    />
                                </group>
                                <group name="Head_M_Cube_005" position={[0, 137.487, -0.014]}>
                                    <Mesh 
                                        name="Head_M_Cube_005_eyes_0"
                                        geometry={nodes.Head_M_Cube_005_eyes_0.geometry}
                                        material={mats.eyes}
                                    />
                                    <Mesh 
                                        name="Head_M_Cube_005_Mat1_0"
                                        geometry={nodes.Head_M_Cube_005_Mat1_0.geometry}
                                        material={mats["Mat.1"]}
                                    />
                                    <Mesh 
                                        name="Head_M_Cube_005_sht_0"
                                        geometry={nodes.Head_M_Cube_005_sht_0.geometry}
                                        material={mats.material}
                                    />
                                </group>
                                <group
                                    name="Retopo_Extrude"
                                    position={[-1.787, 71.308, -32.045]}
                                    rotation={[-2.672, -0.128, -3.075]}
                                >
                                    <Mesh 
                                        name="Retopo_Extrude_sht_0"
                                        geometry={nodes.Retopo_Extrude_sht_0.geometry}
                                        material={mats.material}
                                    />
                                </group>
                                <group name="Torus_3" position={[31.812, 79.255, -3.004]}>
                                    <Mesh 
                                        name="Torus_3_DarkBlue_1"
                                        geometry={nodes.Torus_3_DarkBlue_1.geometry}
                                        material={mats.DarkBlue}
                                    />
                                    <Mesh 
                                        name="Torus_3_Mat1_1"
                                        geometry={nodes.Torus_3_Mat1_1.geometry}
                                        material={mats["Mat.1"]}
                                    />
                                    <Mesh 
                                        name="Torus_3_Mat1_1001"
                                        geometry={nodes.Torus_3_Mat1_1001.geometry}
                                        material={mats["Mat.1_0"]}
                                    />
                                    <Mesh 
                                        name="Torus_3_sht1_0"
                                        geometry={nodes.Torus_3_sht1_0.geometry}
                                        material={mats["sht.1"]}
                                    />
                                    <Mesh 
                                        name="Torus_3_teeth1_1"
                                        geometry={nodes.Torus_3_teeth1_1.geometry}
                                        material={mats["teeth.1"]}
                                    />
                                </group>
                                <group name="wire">
                                    <Mesh 
                                        name="wire_Mat1_0"
                                        geometry={nodes.wire_Mat1_0.geometry}
                                        material={materials["Mat.1"]}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    </group>
)}

useGLTF.preload("/bot.gltf");