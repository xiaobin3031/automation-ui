import { useRef } from 'react';
import '../css/alert.css'
import Icon from './Icon'

function AlertHeader({titleIcon, title, subTitle, closeable, closeAlert}){

  return (
    <div className='header'>
      {
        !!titleIcon && <span className='title'>{titleIcon}</span>
      }
      <span className='title'>{title}</span>
      {
        !!subTitle && <span className='sub-title'>{subTitle}</span>
      }
      {
        !!closeable && <Icon className="icon" iconType='close' onClick={closeAlert}/>
      }
    </div>
  )
}

function AlertContent({content, closeable}){

  return (
    <div className='x-alert-content'>
      {content}
    </div>
  )
}

export default function Alert({
  type, titleIcon, title, subTitle, content, closeable=true, clickToClose=true
}){

  const _alertRef = useRef(null);
  let _classList = type;
  if(!closeable){
    _classList += ' close-auto';
  }

  function closeAlert(){
    _alertRef.current.classList.add('close-focus');
  }

  function removeNode(){
    _alertRef.current.parentNode.remove(_alertRef.current);
  }

  return (
    <div className={`x-alert ${_classList}`} ref={_alertRef} onAnimationEnd={removeNode} onClick={() => !!clickToClose ? closeAlert() : ''}>
      {
        !!title &&
          <AlertHeader titleIcon={titleIcon} title={title} subTitle={subTitle} closeable={closeable} closeAlert={closeAlert}/>
      }
      { 
        !!content && 
          <AlertContent content={content} closeable={!title && closeable ? true : false} closeAlert={closeAlert}/>
      }
    </div>
  )
}