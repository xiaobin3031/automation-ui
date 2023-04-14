import { useState } from "react"
import Input from "../../component/Input";
import Label from "../../component/Label";
import Row from "../../component/Row";
import FlowList from "./FlowList";
import Switch from "../../component/Switch";
import Icon from "../../component/Icon";
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "../../component/Accordion";

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
        <Accordion>
          <AccordionItem>
            <AccordionHeader></AccordionHeader>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
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