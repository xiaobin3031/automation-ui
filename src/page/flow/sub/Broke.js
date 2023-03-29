import Row from "../../../component/Row";
import Element from "../Element";

export default function Broke( broke ){

  console.log('broke', broke)

  return (
    <Row>
      <Element {...broke.element}/>
    </Row>
  )
}