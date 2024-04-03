import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';   
import { HexColorPicker } from "react-colorful";
import { useSetRecoilState } from 'recoil';
// import {colorPick} from '../App'
import {bgColor} from '../App'

function ColorPicker(){
    const [color, setColor] = useState("#aabbcc");
    const setBgColorAtom = useSetRecoilState(bgColor)
    setBgColorAtom(color);
    return (<>
    <div style={{
        backgroundColor:'grey',
        padding:'10px',
        borderRadius:'10px'

    }}>
        <HexColorPicker color={color} onChange={setColor} />
    </div>
    </>)
}

export default ColorPicker;