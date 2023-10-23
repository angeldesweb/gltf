/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const toHex = (c) => c.toString(16).length === 1 ? 
    "0" + c.toString(16) : 
    c.toString(16);


const rgbToHex = (r, g, b) => "#" + toHex(parseInt(r)) + toHex(parseInt(g)) + toHex(parseInt(b));



export const Mesh = ({name,geometry,material}) => {
    let color = '';
    if(material) color = rgbToHex(material.color.r,material.color.g,material.color.b);
    console.log(color)
    return (
        <>
            <mesh
                name={name}
                castShadow
                receiveShadow
                geometry={geometry}
            >
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    )
}