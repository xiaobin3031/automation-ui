import { useState } from "react"
import Row from "../../component/Row";
import Flow from "./Flow";
import { createFlow } from "./data/flowInit";
import FlowDisplay from "./FlowDisplay";

export default function FlowList({props: { btnName = '添加流程', flowLegend = '流程', flowIdPrefix = 'flow', handleFlows }}){

  const [flows, setFlows] = useState([]);
  const [flow, setFlow] = useState(null);

  function addFlow(){
    if(!!flow){
      return;
    }
    setFlow(createFlow(flowIdPrefix));
  }

  function handleFlow(_flow, type){
    if(type === 2){ // delete
      setFlow(null);
    }else{ // update
      setFlow({...flow, ..._flow});
    }
  }

  function saveFlow(flow, index = -1){
    let newFlows;
    if(index < 0 || index >= flows.length){
      newFlows = [...flows, flow];
    }else{
      flows.splice(index, 0, flow)
      newFlows = [...flows]
    }
    setFlow(null);
    setFlows(newFlows)
    handleFlows(newFlows);
  }

  function delFlow(flow){
    if(!!flow){
      let newFlows = flows.filter(a => a._id !== flow._id);
      setFlows(newFlows)
      handleFlows(newFlows);
    }
  }

  return (
    <div>
      <Row>
          <button type="button" onClick={addFlow}>{btnName}</button>
      </Row>
      {
        !!flow && 
          <Flow props={{
            flow: flow,
            handleFlow: handleFlow,
            saveFlow: saveFlow
          }}/>
      }
      {
        flows.length > 0 &&
          <Row>
            {
              flows.map(a => {
                return (<FlowDisplay key={a._id} props={{
                  delFlow: delFlow
                }} />)
              })
            }
          </Row>
      }
    </div>
  )
}