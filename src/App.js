import './App.css';
import BarChart from './components/Chart';
import Action from './components/Action';
import Employee from './components/Employee';

function App() {
  return (
    <div className='main'>
<div style={{position: "relative", width: "33.33%", height: "auto", padding:"10px"}}><h4>DAILY LINE EFFICIENCY KPI</h4><BarChart /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" , top:'6.5%', padding:"10px"}}><h4>DAILY PACKET WATSTEAGE KPIS</h4><Action /></div>
<div style={{position: "relative", width: "33.33%", height: "auto" ,top:'6.5%', padding:"10px"}}><h4>ACTION POINTS</h4><Action/></div>

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px" }}><h4>MONTHLY LINE EFFICIENCY KPIS</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>MONTHLY PRODUCTION TIME KPIS</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>MONTHLY CAPACITY UTILIZATION KPIS</h4><Action /></div> 

<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>MONTHLY 3 MAIN DOWNTIME REASONS KPIS</h4><Action></Action></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>ACTION POINTS</h4><Action /></div>  
<div style={{position: "relative",width: "33.33%", height: "auto", padding:"10px"}}><h4>BEST EMPLOYEE OF THE MONTH</h4><Employee /></div>  
    </div>
  );
}

export default App;

