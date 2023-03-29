// 元素选择
import Row from "../../component/Row"
import CombineElement from "./CombineElement"
import SingleElement from "./SingleElement"

export default function Element( ele ){

  console.log('element', ele);
  function addCombileEle(){

  }

  return (
    <div className="flow-element">
      <SingleElement {...ele} />
      <Row>
        <button type="button" onClick={addCombileEle}>组合元素</button>
      </Row>
      <Row>
        {
          ele.anyElements && ele.anyElements.length &&
            ele.anyElements.map(a => {
              return (<CombineElement props={a}/>)
            })
        }
      </Row>
    </div>
  )
}