import Row from "../../../component/Row";
import Broke from "./Broke";

// 循环流程
export default function WhileFlow( props ){

  const flow = props.flow;

  function handleWhile(event){
    flow[event.target.name] = event.target.value;
    props.setFlow(flow);
  }

  return (
    <Row>
      <Row>
        <Broke {...flow.broke} />
      </Row>
      <Row>
        <label>每次循环的间隔: </label>
        <input type="number" name="sleepTime" defaultValue={flow.sleepTime} onChange={handleWhile} />
      </Row>
      <Row>
        <label>最大尝试次数: </label>
        <input type="number" name="maxCount" defaultValue={flow.maxCount} onChange={handleWhile} />
      </Row>
      <Row>
        <button type="button">循环流程</button>
      </Row>
    </Row>
  )
}