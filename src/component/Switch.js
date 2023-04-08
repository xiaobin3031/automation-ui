import { useRef, useState } from "react"

const comBtnBorderClass = 'x-switch-button-border', comBtnClass = 'x-switch-button';
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
  let _btnClass, _borderClass;
  if(curVal.current === okValue){
    _btnClass = [comBtnClass, 'x-switch-button-ok'];
    _borderClass = [comBtnBorderClass, 'x-switch-button-border-ok'];
  }else{
    _btnClass = [comBtnClass, 'x-switch-button-cancel'];
    _borderClass = [comBtnBorderClass, 'x-switch-button-border-cancel'];
  }
  const [btnClass, setBtnClass] = useState(_btnClass);
  const [borderClass, setBorderClass] = useState(_borderClass);

  function toggleSwitch(){
    if(curVal.current === okValue){
      curVal.current = cancelValue;
    }else{
      curVal.current = okValue;
    }
    if(curVal.current === okValue){
      setBtnClass([comBtnClass, 'x-switch-button-ok-animation']);
      setBorderClass([comBtnBorderClass, 'x-switch-button-border-ok-animation']);
    }else{
      setBtnClass([comBtnClass, 'x-switch-button-cancel-animation']);
      setBorderClass([comBtnBorderClass, 'x-switch-button-border-cancel-animation']);
    }
  }

  return (
    <div className="x-switch">
      <div className="x-switch-false-name" color={falseColor}>{falseName}</div>
      <div className={borderClass.join(' ')}>
        <div className={btnClass.join(' ')} onClick={toggleSwitch}></div>
      </div>
      <div className="x-switch-true-name" color={trueColor}>{trueName}</div>
    </div>
  )
}