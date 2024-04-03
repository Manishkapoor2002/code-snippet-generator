import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker';
import { useRecoilSnapshot, useRecoilState } from 'recoil';
import { zIndexCol } from '../App';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

function ColorModal() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log('Key pressed:', event.key);
            if(event.key == 'Escape'){
                setZIndex(-5)
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []); 

    const [index, setZIndex] = useRecoilState(zIndexCol);

    console.log(index);
    return (<div style={{
    display: 'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    position: 'fixed',
    top: '50%', 
    left: '40%',
    zIndex: index,
    width:'fit-content',
    padding:'20px',
    background:'rgba(236, 236, 236,0.6)',
    borderRadius:'10px'
    }}>

            <div onClick={() => {
                setZIndex(-5)
            }} style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'20px',
                height:'20px',
                backgroundColor:'black',
                color:'rgba(108, 122, 137)',
                cursor:'pointer',
                borderRadius:'50%'
            }}><CloseIcon/></div>

            <ColorPicker />
    </div>
    );
}

export default ColorModal;
