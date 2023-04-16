import React, { useRef, useState } from 'react';
import '../css/accordion.css'
import Icon from './Icon';

let accordionGlobalId = 1;

function AccordionHeader({title="Accortion Item", subTitle, isOpen}){

  let icon;

  if(isOpen){
    icon = <Icon iconType="up" />
  }else{
    icon = <Icon iconType="down" />
  }

  return (
    <>
      <span className='title'>{title}</span>
      {
        !!subTitle && <span className='sub-title'>{subTitle}</span>
      }
      <span className='icon'>{icon}</span>
    </>
  )
}

function AccordionContent({content}){

  return (
    <div style={{
      padding: "8px 12px"
    }}>
      {content}
    </div>
  )
}

function AccordionItem({title, subTitle, content, open, item, index, renderHeader, renderContent, openOne, collsapeOther}){

  const opens = useRef(!!item[open]);
  const _itemRef = useRef(null);

  function contentTransitionEnd(){
    if(opens.current){
      _itemRef.current.classList.remove('expanding');
      _itemRef.current.classList.add('expand');
    }else{
      _itemRef.current.classList.remove('collsaping');
      _itemRef.current.classList.add('collsape');
    } 
  }

  function setAnimation($dom, name){
    if(!$dom) return;
    $dom.style.animation = `${name} .3s ease`
    $dom.style.animationFillMode = 'forwards'
  }

  function getHeaderIconDom(){
    const _children = _itemRef.current.children[0].children;
    for(let i = 0;i<_children.length;i++){
      if(_children[i].classList.contains('icon')){
        return _children[i].firstChild;
      }
    }
    return null;
  }

  function changeOpenState(){
    opens.current = !opens.current;
    if(opens.current){
      setAnimation(getHeaderIconDom(), 'x-accordion-header-open')
      _itemRef.current.classList.remove('collsape');
      _itemRef.current.classList.add('expanding');
    }else{
      setAnimation(getHeaderIconDom(), 'x-accordion-header-close')
      _itemRef.current.classList.remove('expand');
      _itemRef.current.classList.add('collsaping');
    }
  }

  return (
    <div className={`item${opens.current ? ' expand' : ' collsape'}`} ref={_itemRef}>
      <div className='header' onClick={() => changeOpenState()}>
        {!!renderHeader ? renderHeader(item, index) : <AccordionHeader title={item[title]} subTitle={item[subTitle]} isOpen={opens.current}/>}
      </div>
      <div className='content' onTransitionEnd={contentTransitionEnd}>
        {!!renderContent ? renderContent(item, index) : <AccordionContent content={item[content]}/>}
      </div>
    </div>
  )
}

export function Accordion({
  list, 
  key = "_key", 
  title = "_title",
  subTitle = "_subTitle",
  content = "_content",
  open = "_open",
  renderHeader,
  renderContent,
  ...props}){

  const _accrodionRef = useRef(null);
  const [_list, setList] = useState(list);

  function getItemKey(item){
    let _key = item[key];
    if(!_key){
      _key = `accortion-item-${accordionGlobalId++}`
    }
    return _key;
  }

  return (
    <div className="x-accordion" {...props} ref={_accrodionRef}>
      {
        !!list && list.length > 0 &&
        list.map((a, index) => {
          return (
            <AccordionItem key={getItemKey(a)}
              item={a}
              title={title}
              subTitle={subTitle}
              content={content}
              open={open}
              index={index}
              openOne
              renderContent={renderContent}
              renderHeader={renderHeader}
            />
          )
        })
      }
    </div>
  )
}