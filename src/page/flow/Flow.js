// 一个流程
import { flows } from "./data/flowData"
import BuildInFlow from "./sub/BuildInFlow";
import CacheFlow from "./sub/CacheFlow";
import CheckFlow from "./sub/CheckFlow";
import ClickFlow from "./sub/ClickFlow";
import PressKeyFlow from "./sub/PressKeyFlow";
import RecycleViewFlow from "./sub/RecycleViewFlow";
import SleepFlow from "./sub/SleepFlow";
import SwipeFlow from "./sub/SwipeFlow";
import WaitFlow from "./sub/WaitFlow";
import WhileFlow from "./sub/WhileFlow";
import InputFlow from "./sub/InputFlow";
import Row from "../../component/Row";
import initFlow from "./data/flowInit";

export default function Flow({ props }){

  let flow = props.flow;
  initFlow(flow);
  console.log('inited.flow', flow);

  function handlePerform(event){
    flow[event.target.name] = event.target.value;
    initFlow(flow);
    console.log('inited.flow', flow);
    props.setFlow(flow);
  }

  function saveFlow(){
    console.log('save.flow', flow);
    props.setFlow(flow);
  }
  return (
    <div className="flow">
      <fieldset>
        <legend>流程: {flow.id}</legend>
        <Row>
          <select name="perform" onChange={handlePerform} defaultValue={flow.perform}>
            {
              flows.map(a => {
                return (<option value={a.name} key={a.name}>{a.desc || a.name}</option>)
              })
            }
          </select>
        </Row>
        <Row>
            {
              flow.perform === 'buildIn' &&
                <BuildInFlow {...props} />
            }
            {
              flow.perform === 'cache' &&
                <CacheFlow {...props}/>
            }
            {
              flow.perform === 'check' &&
                <CheckFlow {...props}/>
            }
            {
              flow.perform === 'click' &&
                <ClickFlow {...props}/>
            }
            {
              flow.perform === 'input' &&
                <InputFlow {...props}/>
            }
            {
              flow.perform === 'pressKey' &&
                <PressKeyFlow {...props}/>
            }
            {
              flow.perform === 'recycleView' &&
                <RecycleViewFlow {...props}/>
            }
            {
              flow.perform === 'sleep' &&
                <SleepFlow {...props}/>
            }
            {
              flow.perform === 'swipe' &&
                <SwipeFlow {...props}/>
            }
            {
              flow.perform === 'wait' &&
                <WaitFlow {...props}/>
            }
            {
              flow.perform === 'while' &&
                <WhileFlow {...props}/>
            }
        </Row>
        <Row>
          <button type="button" onClick={saveFlow}>保存</button>
          <button type="button">删除</button>
        </Row>
      </fieldset>
    </div>
  )
}