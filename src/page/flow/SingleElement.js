import { useRef } from "react";
import Row from "../../component/Row"
import Tips from "../../component/Tips"

export default function SingleElement(ele){

  const idOrTextVal = useRef(!!ele.id? ele.id: ele.text);

  function handleElement(event){
    const name = event.target.name;
    const value = event.target.value;
    switch(name){
      case 'eleType':
        if('id' === value){
          // ele = {...ele, id: idOrTextVal.current, text: ''}
          ele['id'] = idOrTextVal.current;
          ele['text'] = '';
        }else{
          ele.id = '';
          ele.text = idOrTextVal.current;
        }
        break;
      case 'notInRoot':
      case 'optional':
        ele[name] = value;
        break;
      default:
        break;
    }
  }

  return (
    <div className="single-element">
      <Row>
        <label> <input type="radio" name="eleType" value="id" checked={!!ele.id} onChange={handleElement}/> id </label>
        <label> <input type="radio" name="eleType" value="text" checked={!ele.id && !!ele.text} onChange={handleElement}/> text </label>
        <input name="idOrText" defaultValue={idOrTextVal.current} onChange={event => idOrTextVal.current = event.target.value}/>
      </Row>
      <Row>
        <label> <input type="checkbox" name="notInRoot" checked={!!ele.notInRoot} onChange={handleElement}/> 不再当前页面上 <Tips title={"比如消息提示框上的问题"}/> </label>
        <label> <input type="checkbox" name="optional" checked={!!ele.optional} onChange={handleElement}/> 元素可选 <Tips title={"如果元素不存在，不会中断测试"}/> </label>
      </Row>
    </div>
  )
}