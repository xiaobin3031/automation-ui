import { useState } from "react"
import Input from "../../component/Input";
import Label from "../../component/Label";
import Row from "../../component/Row";
import FlowList from "./FlowList";
import Switch from "../../component/Switch";
import Icon from "../../component/Icon";
import { Accordion } from "../../component/Accordion";
import Alert from "../../component/Alert";

const accordionList = [
  {
    _title: "Accordion Item",
    _content: "GoGoGo"
  },
  {
    _title: "Account Item 2",
    _content: "GoGoGo2"
  }
];

export default function Scene(){

  const [args, setArgs] = useState({
    name: '',
    flowBeforeSleep: 0,
    flowAfterSleep: 0,
    flows: []
  });
  
  function handleFlows(flows){
    args.flows = [...flows];
    setArgs(args)
  }

  function changeArgs(event){
    args[event.target.name] = event.target.value;
    setArgs(args)
  }

  return (
    <div className="scene">
      <Row>
        <Switch />
        <Icon iconType="down" />
      </Row>
      <Row>
        <Accordion
          list={accordionList}
          openOne
        />
      </Row>
      <Row>
        <Alert type='success' title="title" closeable content="GoGoGo"/>
        <Alert type='warning' closeable clickToClose content={
          <div>
            aaaaaaaa<a href="https://www.baidu.com">click me</a> gggggggggg
          </div>
        }/>
      </Row>
      <Row>
        <Label>功能名称</Label>
        <Input defaultValue={args.name} onChange={changeArgs}/>
      </Row>
      <FlowList key="" props={{
        flowIdPrefix: 'scene-flow',
        handleFlows: handleFlows
      }} />
    </div>
  )
}