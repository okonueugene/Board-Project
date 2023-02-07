import './App.css';
import BarChart from './components/Chart';
import Action from './components/Action';
import Employee from './components/Employee';

function App() {
  return (
    <div style={{display: "flex",flexWrap: "wrap",height:"110vh",width:"100%"}}>
<div style={{position: "relative", width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><BarChart /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" , top:'2%', padding:"10px"}}><h4>Hello</h4><Action /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" ,top:'2%', padding:"10px"}}><h4>Hello</h4><Action/></div>

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px" }}><h4>Hello</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><Action /></div> 

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><Action></Action></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>Hello</h4><Employee /></div>  
    </div>
  );
}

export default App;
