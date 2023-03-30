import { useState } from "react"
import Row from "../../component/Row";
import Flow from "./Flow";
import { createFlow } from "./data/flowInit";

export default function FlowList({props: { btnName = '添加流程', flowLegend = '流程', flowIdPrefix = 'flow', handleFlows }}){

  const [flows, setFlows] = useState([]);

  function addFlow(){
    setFlows([
      ...flows,
      createFlow(flowIdPrefix)
    ])
    handleFlows(flows);
  }

  function setFlow(flow){
    const newFlows = flows.map(a => {
        if(a._id === flow._id){
          return flow;
        }else{
          return a;
        }
      })
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