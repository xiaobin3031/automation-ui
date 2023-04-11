import { useRef, useState } from "react"
import '../css/switch.css'

const comBtnBorderClass = 'x-switch-button-border', comBtnClass = 'x-switch-button', comLabelClass = "x-switch-label";
export default function Switch({
  trueName="ok", 
  trueColor="green", 
  falseName="cancel", 
  falseColor="red", 
  okValue="1",
  cancelValue="0",
  currentValue="1",
  switchChange}
){

  const curVal = useRef(currentValue);
  let _btnClass, _borderClass, _labelOkClass, _labelCancelClass;
  if(curVal.current === okValue){
    _btnClass = [comBtnClass, 'x-switch-button-ok'];
    _borderClass = [comBtnBorderClass, 'x-switch-button-border-ok'];
    _labelOkClass = [comLabelClass, 'x-switch-label-ok'];
    _labelCancelClass = [comLabelClass];
  }else{
    _btnClass = [comBtnClass, 'x-switch-button-cancel'];
    _borderClass = [comBtnBorderClass, 'x-switch-button-border-cancel'];
    _labelOkClass = [comLabelClass];
    _labelCancelClass = [comLabelClass, 'x-switch-label-cancel'];
  }
  const [btnClass, setBtnClass] = useState(_btnClass);
  const [borderClass, setBorderClass] = useState(_borderClass);
  const [labelOkClass, setLabelOkClass] = useState(_labelOkClass);
  const [labelCancelClass, setLabelCancelClass] = useState(_labelCancelClass);

  function toggleSwitch(){
    if(curVal.current === okValue){
      curVal.current = cancelValue;
    }else{
      curVal.current = okValue;
    }
    if(curVal.current === okValue){
      setBtnClass([comBtnClass, 'x-switch-button-ok-animation']);
      setBorderClass([comBtnBorderClass, 'x-switch-button-border-ok-animation']);
      setLabelOkClass([comLabelClass, 'x-switch-label-ok']);
      setLabelCancelClass([comLabelClass]);
    }else{
      setBtnClass([comBtnClass, 'x-switch-button-cancel-animation']);
      setBorderClass([comBtnBorderClass, 'x-switch-button-border-cancel-animation']);
      setLabelOkClass([comLabelClass]);
      setLabelCancelClass([comLabelClass, 'x-switch-label-cancel']);
    }
  }

  return (
    <div className="x-switch">
      <div className={labelOkClass.join(' ')} color={falseColor}>{falseName}</div>
      <div className={borderClass.join(' ')}>
        <div className={btnClass.join(' ')} onClick={toggleSwitch}></div>
      </div>
      <div className={labelCancelClass.join(' ')} color={trueColor}>{trueName}</div>
    </div>
  )
}