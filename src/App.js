import './App.css';
import BarChart from './components/Chart';
import Action from './components/Action';
import Employee from './components/Employee';

function App() {
  return (
    <div style={{display: "flex",flexWrap: "wrap",height:"110vh",width:"100%"}}>
<div style={{width: "33.33%", height: "auto", padding:"10px"}}><BarChart /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" , top:"6%", padding:"10px"}}><Action /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" , top:"6%", padding:"10px"}}><Action/></div>

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px" }}><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><Action /></div> 

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><Action></Action></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><Employee /></div>  
    </div>
  );
}

export default App;
