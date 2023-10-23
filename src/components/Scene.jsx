/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { OrbitControls , Stage } from '@react-three/drei';
import { Model } from './Model';

export const Scene = () => {
    return (
        <>
            <Stage
                intensity={1.5}
                environment="city"
                shadows={{ type: "accumulative" , color: "#ffffff", colorBlend: 2 , opacity: 2 }}
                adjustCamera={0}
            >
                <Model/>
            </Stage>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    )
}