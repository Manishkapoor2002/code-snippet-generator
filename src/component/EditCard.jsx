import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { useRecoilValue } from 'recoil';
import { bgColor } from '../App.jsx'
// import AppBar from './AppBar.jsx';

import { sidePadding } from '../App.jsx';



function EditCard() {
  const [code, setCode] = React.useState(
    `function App{
      console.log("write your code here!!);
}`
  );
  const getBgValue = useRecoilValue(bgColor)
 
  const getSidePadding = useRecoilValue(sidePadding)

  console.log(getBgValue)


  return <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100vh',
      color:'slateblue'
    }}>

      <div id='image_Div' style={{
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100px',
        padding: getSidePadding,
        border: '1px solid black',
        borderRadius: '5px',
   
        backgroundColor: getBgValue,
      }}>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            backgroundColor: "white",
            fontFamily: '"JetBrains Mono","monospace"',
            fontSize: 15,
            fontWeight:'500',
            minWidth:'350px',
            maxWidth: '900px',
          }}
        />
      </div>

    </div>

    {/* <AppBar/> */}
   


  </>

}



export default EditCard