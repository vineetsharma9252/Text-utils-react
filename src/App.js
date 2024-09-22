// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About' ; 
import Alert from './components/Alert' ;
import TextForm from './components/TextForm';  
import { useState } from 'react';
// import {
//   BrowserRouter as Router , Routes,
//   Route , 
//   Link 
// } from 'react-router-dom' ; 
let name = "vineet"  ;
function App() {
  const [mode, setmode] = useState('light') ; // wheater dark mode is enabled is not
  const toggleMode=()=>
  {
    if (mode === 'light'){
      setmode("dark") ; 
      document.body.style.backgroundColor = "grey" ; 
      showAlert("Dark mode has been enabled ","success")
    }
    else{
      setmode("light") ; 
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled ","success")  ; 
    }
  }
  const [alert , setAlert] = useState();
  const showAlert = (message  , type)=>{
    setAlert({
      msg : message , 
      type:type
    })
    setTimeout(() => {
      setAlert(null); 
    }, 2000);
  }
  return (
    <>
    {/* <Router> */}
<Alert alert={alert}/>
<Navbar title="TextUtils" about="About" mode={mode} toggleMode = {toggleMode}/>
<div className="container">
    {/* <Routes>
    <Route exact path='/about' element={<About/>}>
    </Route>
    <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the Necessary Details" mode ={mode}/>}></Route>
    </Routes> */}
    <TextForm/>
</div>
{/* </Router> */}
    </>
  );
}

export default App;
