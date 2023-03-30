import { useRef } from "react";
import Row from "../../component/Row"
import Tips from "../../component/Tips"

export default function SingleElement({props:{ ele, handleEle }}){

  const idOrTextVal = useRef(!!ele.id? ele.id: ele.text);
  const select = useRef(!!ele.id || (!ele.id && !ele.text) ? 'id': "text");

  function handleElement(event){
    const name = event.target.getAttribute('realname');
    const value = event.target.value;
    switch(name){
      case 'eleType':
        select.current = value;
        setEelement();
        break;
      case 'idOrText':
        idOrTextVal.current = value;
        setEelement();
        break;
      case 'notInRoot':
      case 'optional':
      case 'multi':
        ele[name] = event.target.checked;
        break;
      default:
        break;
    }
    handleEle(ele);
  }

  function setEelement(){
    if('id' === select.current){
      ele.id = idOrTextVal.current;
      ele.text = '';
    }else{
      ele.id = '';
      ele.text = idOrTextVal.current;
    }
  }

  return (
    <div className="single-element">
      <Row>
        <label> <input type="radio" realname="eleType" name={`eleType-${ele._id}`} value="id" checked={select.current === 'id'} onChange={handleElement}/> id </label>
        <label> <input type="radio" realname="eleType" name={`eleType-${ele._id}`} value="text" checked={select.current === 'text'} onChange={handleElement}/> text </label>
        <input name={`idOrText-${ele._id}`} realname="idOrText" defaultValue={idOrTextVal.current} onChange={handleElement}/>
      </Row>
      <Row>
        <label> <input type="checkbox" realname="notInRoot" name={`notInRoot-${ele._id}`} checked={!!ele.notInRoot} onChange={handleElement}/> 不再当前页面上  </label><Tips title={"比如消息提示框上的问题"}/>
        <label> <input type="checkbox" realname="optional" name={`optional-${ele._id}`} checked={!!ele.optional} onChange={handleElement}/> 元素可选  </label><Tips title={"如果元素不存在，不会中断测试"}/>
        <label> <input type="checkbox" realname="multi" name={`multi-${ele._id}`} checked={!!ele.multi} onChange={handleElement}/> 元素重复 </label><Tips title={"如果有重名(id或者text)的元素，需要勾选此项"}/>
      </Row>
    </div>
  )
}