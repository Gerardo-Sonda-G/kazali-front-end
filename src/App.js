import './App.css';
import { useState } from 'react'
import { api } from './api/api';

function App() {
  const [objeto, setObjeto] = useState(['{\n\n}'])
  const [response, setResponse] = useState(['{\n\n}'])

  const getResponse = async()=>{
   const resp = await api.post('http://localhost:3001/endpoint1',JSON.parse(objeto),{
     headers:{
       'content-type':'application/json',
       'Access-Controll-Allow-Origins':'*'
     }
   })
   setResponse(JSON.stringify(resp.data,null,5))
  }

  const updadeObjeto = ({target})=>{
    setObjeto(target.value)
  }

  return (
      <>
       <h1>Endpoint #1</h1>
    <div className="two-col"> 
        <div className="card">
            <div className="flex"> 
                <label>Ingrese el Objeto</label>
                <textarea value={objeto} onChange={updadeObjeto} name="Objeto" id="objeto" cols="25" rows="13"></textarea>
             </div>
        </div>
   
        <div className="card">
           <div className="flex"> 
               <label>Resultado</label>
               <textarea name="Resultado" className='disabled' value={response} id="res" cols="25" rows="13" disabled></textarea>
            </div>
        </div>
    </div>    
    <div className="flex"><button className="button1" onClick={getResponse}>Ejecutar</button></div>
    </>
    
  );
}

export default App;
