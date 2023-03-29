import { useState, useRef } from "react"
import Row from "../../component/Row";
import Flow from "./Flow";
import { flows as flowsData } from "./data/flowData"

export default function Scene(){

  const flowId = useRef(1);
  const [args, setArgs] = useState({
    name: '',
    flowBeforeSleep: 0,
    flowAfterSleep: 0
  });
  const [flows, setFlows] = useState([]);
  
  function addFlow(){
    setFlows([
      ...flows,
      { 
        _flowId: flowId.current++,
        perform: flowsData[0].name 
      }
    ])
  }

  function setFlow(flow){
    console.log('setflow', flow);
    setFlows(
      flows.map(a => {
        if(a._flowId === flow._flowId){
          return flow;
        }else{
          return a;
        }
      })
    )
  }

  function changeArgs(event){
    args[event.target.name] = event.target.value;
    setArgs(args)
  }

  return (
    <div className="scene">
      <Row>
        <label>活动名称</label>
        <input defaultValue={args.name} onChange={changeArgs}/>
      </Row>
      <Row>
        <button type="button" onClick={addFlow}>添加流程</button>
      </Row>
      <Row>
        {
          flows.map(a => {
            return (<Flow key={a._flowId} props={{
              flow: a,
              setFlow: setFlow
            }}/>)
          })
        }
      </Row>
    </div>
  )
}