import {Routes,Route,Navigate} from 'react-router-dom'
import App from './App';
import Endpoint2 from './Endpoint2';
import Navbar from './Navbar';

function Home(){
    return(
        <>
        <Navbar/>

        <Routes>
            <Route path="end-point1" element={<App/>}/> 
            <Route path="end-point2" element={<Endpoint2/>}/> 

            <Route path="/*" element={<Navigate to="end-point1"/>}/> 

        </Routes>
        </>
      
    )
}

export default Home;