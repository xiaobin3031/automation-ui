import { useState } from "react"
import Row from "../../component/Row";
import Flow from "./Flow";
import { createFlow } from "./data/flowInit";

export default function FlowList({props: { btnName = '添加流程', flowLegend = '流程', flowIdPrefix = 'flow', handleFlows }}){

  const [flows, setFlows] = useState([]);

  function addFlow(){
    if(flows.some(a => !a._saveed)){
      return;
    }
    setFlows([
      ...flows,
      createFlow(flowIdPrefix)
    ])
    handleFlows(flows);
  }

  function setFlow(flow, type){
    let newFlows;
    if(type === 2){ // delete
      newFlows = flows.filter(a => a._id !== flow._id);
    }else{ // update
      newFlows = flows.map(a => a._id === flow._id ? flow: a)
    }
    setFlows(newFlows)
    handleFlows(newFlows);
  }

  return (
    <div>
      <Row>
          <button type="button" onClick={addFlow}>{btnName}</button>
      </Row>
      {
        flows.length > 0 &&
          <Row>
            {
              flows.map(a => {
                return (<Flow key={a._id} props={{
                  flow: a,
                  setFlow: setFlow
                }}/>)
              })
            }
          </Row>
      }
    </div>
  )
}