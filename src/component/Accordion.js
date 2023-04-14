import { useRef } from 'react';
import '../css/accordion.css'
import Icon from './Icon';

export function AccordionItem({children, ...props}){

  return (
    <div className="x-accordion-item" {...props}>
      {children}
    </div>
  )
}

export function AccordionHeader({title="Accortion Item", subTitle, open, ...props}){

  let icon;

  if(open){
    icon = <Icon iconType="up" />
  }else{
    icon = <Icon iconType="down" />
  }

  const _iconRef = useRef(null);
  const _headerRef = useRef(null);

  function clickHeader(){

  }

  return (
    <div className="x-accordion-header" {...props} onClick={clickHeader} ref={_headerRef}>
      <span className='x-accordion-header-title'>{title}</span>
      {
        !!subTitle && <span className='x-accordion-header-sub-title'>{subTitle}</span>
      }
      <span ref={_iconRef}>{icon}</span>
    </div>
  )
}

export function AccordionContent({children, ...props}){

  return (
    <div className="x-accordion-content" {...props}>
      {children}
    </div>
  )
}

export function Accordion({children, ...props}){

  console.log('accordion.children', children);

  const _accrodionRef = useRef(null);

  function changeOpen(open){

  }

  return (
    <div className="x-accordion" {...props} ref={_accrodionRef}>
      {children}
    </div>
  )
}