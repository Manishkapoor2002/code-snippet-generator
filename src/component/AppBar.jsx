import ReactDOM from 'react-dom';
import { toPng } from 'html-to-image';
import React from 'react';
import DropDownMenu from './DropDownMenu';
import PaddingSelect from './PaddingSelect';
import Button from '@mui/material/Button'
import {zIndexCol} from '../App'
import { useRecoilValue, useSetRecoilState } from 'recoil';



function AppBar(){  
  const setZIndx = useSetRecoilState(zIndexCol)
  const currIdx = useRecoilValue(zIndexCol)
   
    const downloadImage = (dataUrl, fileName) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        link.click();
      };
    
      const convertHtmlToImage = () => {
        const element = document.getElementById('image_Div');
        toPng(element,{ quality: 2 })
          .then((dataUrl) => {
            console.log(dataUrl)  ;
            downloadImage(dataUrl, 'image.png');
    
          })
          .catch((error) => {
            console.error('Error converting HTML to image:', error);
          });
      };

      return <>

<div style={{
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    position: 'fixed',
    top: '80%', 
    left: '25%',
    zIndex: '3',
    width:'60%',
    padding:'2px',
    // border:'1px solid grey',
    // borderRadius:'10px',


}}>
    <DropDownMenu />
    <Button variant="outlined" onClick={()=>{
      console.log(currIdx)
        if(currIdx == -5){
          setZIndx('3')
        }else{
          setZIndx(-5)
        }
    }} style={{
      backgroundColor:'white',
    }}>Set Custom Color</Button>
    <PaddingSelect />
    <Button variant="outlined" onClick={convertHtmlToImage}>Download Image</Button>
</div>

    
    </>
}

export default AppBar