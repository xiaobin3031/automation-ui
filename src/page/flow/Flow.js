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
import { useState } from "react";
import Element from "./Element";
import * as flowInit from "./data/flowInit"

export default function Flow({ props }){

  const [flow, setFlow] = useState({...props.flow});
  const [showEle, setShowEle] = useState(false);
  const [ele, setEle] = useState(flowInit.default.initElement({}));

  console.log('inited.flow', flow);

  function handlePerform(event){
    flow.perform = event.target.value;
    setFlow({
      perform: event.target.value
    })
    setShowEle(!!flows.filter(a => a.name === event.target.value)[0].showEle);
  }

  function handleEle(updateEle){
    setEle({
      ...ele,
      updateEle
    })
  }

  function handleAnyEle(type, anyEle){
    if(type === 1){ // add
      setEle({
        ...ele,
        anyElements: [
          ...ele.anyElements,
          anyEle
        ]
      })
    }else if(type === 2){ // update
      setEle({
        ...ele,
        anyElements: ele.anyElements.map(a => {
          if(a._id === anyEle._id){
            return anyEle;
          }else{
            return a;
          }
        })
      })
    }else{ // delete
      setEle({
        ...ele,
        anyElements: ele.anyElements.filter(a => a._id !== anyEle._id)
      })
    }
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
        {
          showEle && <Element props={{
            ele: ele,
            handleEle: handleEle,
            handleAnyEle: handleAnyEle
          }} />
        }
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