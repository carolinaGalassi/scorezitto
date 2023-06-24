import {useState} from 'react';
import './App.css';

const Puntero = ({title, value, changeValue,color}) => {
  const addPoint = e => {
    changeValue(prev =>  prev + 1)}
  const subtractPoint = e => {
    e.preventDefault();
    changeValue(prev => prev===0? prev : prev - 1)}

return <div className='pointerContainer'>
<h2 style={{color}}>{title}</h2>
<h3 style={{color}} onClick={addPoint} onContextMenu={subtractPoint}>{value}</h3>
</div>
}

function App() {
  const [local,setLocal] = useState(0);
  const [visit,setVisit] = useState(0);

  return (
    <div className="App">
  <Puntero title={'Local'} value={local} changeValue={setLocal} color="rgb(18, 2, 139)"/>
  <Puntero title={'Visitante'} value={visit} changeValue={setVisit} color="rgb(155, 0, 0)"/>
    </div>
  );
}

export default App;
