import Row from "../../component/Row";
import { flows as flowsData } from "./data/flowData";

// 流程展示
function Broke(_broke){

}
function Element(_ele){

  return (
    <div>
      {
        !!_ele.anyElements && _ele.anyElements.length > 0 && 
          <CombineElement {..._ele.anyElements} />
      }
      {
        (!_ele.anyElements || _ele.anyElements.length == 0) &&
          <SingleElement {..._ele}/>
      }
    </div>
  )
}
function CombineElement(_anyEles){

}
function SingleElement(_ele){
  const text = _ele.id || _ele.text;
  let prefix;
  if(!!_ele.id){
    prefix = 'id';
  }else if(!!_ele.text){
    prefix = 'text';
  }else if(!!_ele.anyElements && _ele.anyElements.length > 0){
    prefix = 'anyElement';
  }else{
    prefix = 'none';
  }
  return (
    <span className="single-element">
      <span className="single-element-prefix">{prefix}: </span>
      <span className="single-element-text">{text}</span>
    </span>
  )
}
function BuildInFlow(_flow){

}
function CacheFlow(_flow){

}
function CheckFlow(_flow){

}
function ClickFlow(_flow){

}
function InputFlow(_flow){

}
function PressKeyFlow(_flow){

}
function RecycleViewFlow(_flow){

}
function SleepFlow(_flow){

}
function SwipeFlow(_flow){

}
function WaitFlow(_flow){

}
function WhileFlow(_flow){

}

export default function FlowDisplay({props: { flow, delFlow }}){
  const flowPerform = flowsData.filter(a => a.name === flow.perform)[0] || {};

  return (
    <div>
      <div className="card-head">
        {flowPerform.desc}
        {
          !!flow.name && 
          (
            <span>/ <span>{flow.name}</span></span>
          )
        }
      </div>
      <Row>
          {
            flow.perform === 'buildIn' &&
              <BuildInFlow {...flow}/>
          }
          {
            flow.perform === 'cache' &&
              <CacheFlow {...flow}/>
          }
          {
            flow.perform === 'check' &&
              <CheckFlow {...flow}/>
          }
          {
            flow.perform === 'click' &&
              <ClickFlow {...flow}/>
          }
          {
            flow.perform === 'input' &&
              <InputFlow {...flow}/>
          }
          {
            flow.perform === 'pressKey' &&
              <PressKeyFlow {...flow}/>
          }
          {
            flow.perform === 'recycleView' &&
              <RecycleViewFlow {...flow}/>
          }
          {
            flow.perform === 'sleep' &&
              <SleepFlow {...flow}/>
          }
          {
            flow.perform === 'swipe' &&
              <SwipeFlow {...flow}/>
          }
          {
            flow.perform === 'wait' &&
              <WaitFlow {...flow}/>
          }
          {
            flow.perform === 'while' &&
              <WhileFlow {...flow}/>
          }
      </Row>
    </div>
  )
}