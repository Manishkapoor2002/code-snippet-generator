import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import EditCard from './component/EditCard';
import AppBar from './component/AppBar';
import ColorPicker from './component/ColorPicker';
import ColorModal from './component/ColorModal'
import { useEffect } from 'react';


import {
  RecoilRoot,
  atom,

} from 'recoil';


function App(){


 

  return <div style={{
      margin:0,
      padding:0,
  }}>

    
  <RecoilRoot>
    <div style={{
      height:'100vh',
      backgroundColor:'white'
    }} onClick={()=>{
      
    }}>
      <AppBar/> 
    <EditCard/>
    <ColorModal/>
    </div>
    </RecoilRoot>
  </div>
}

export const bgColor = atom({
  key: 'bgColor',
  default: 'tomato', 
});


export const sidePadding = atom({
  key:'sidePadding',
  default:'32px'
})
export const zIndexCol = atom({
  key:'zIndexCol',
  default:'-5'
})




export default App;
