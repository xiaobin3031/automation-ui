import { useRef } from 'react';
import '../css/button.css'
import Label from './Label';

let buttonGlobalId = 1;
const defaultProps = {
  text: '_text',
  type: '_type',
  color: '_color',
  outline: '_outline',
  value: '_value',
  clickBtn: '_clickBtn'
};
export function Button({children, type="button", color, outline, clickBtn, ...props}){

  const _classList = ['x-button', color];
  if(outline){
    _classList.push('outline');
  }

  return (
    <button className={_classList.join(' ')} type={type} {...props} onClick={event => !!clickBtn ? clickBtn(event) : ""}>{children}</button>
  )
}

function CheckboxGroup({list, valueCheck}){

}
function RadioGroup({list, ...props}){
  const _props = {...defaultProps, ...props};

  const _checks = useRef(list.map(a => false));

  const _radioName = `radio-name-${buttonGlobalId++}`

  function checkedButton(index){

  }

  return (
    list.map((a, index) => {
      return <Button key={`x-button-group-button-${buttonGlobalId++}`}
        type={a[_props.type]}
        color={a[_props.color]}
        outline
        onClick={() => checkedButton(index)}
       >{a[_props.text]}</Button>
    })
  )
}
function InnerButtonGroup({list, ...props}){

  const _props = {...defaultProps, ...props};

  return (
    list.map(a => {
      return <Button key={`x-button-group-button-${buttonGlobalId++}`}
        type={a[_props.type]}
        color={a[_props.color]}
        outline={a[_props.outline]}
        clickBtn={a[_props.clickBtn]}
       >{a[_props.text]}</Button>
    })
  )
}

/**
 * @param groupType button(defualt), radio, checkbox 
 * @param valueCheck type=radio,checkbox时生效
 */
export function ButtonGroup({list, groupType = 'button', ...props}){

  return (
    <>
      {
        !!list && list.length > 0 && 
          <div className='x-button-group'>
            {
              groupType === 'button' && <InnerButtonGroup list={list} {...props}/>
            }
            {
              groupType === 'checkbox' && <CheckboxGroup list={list} {...props} />
            }
            {
              groupType === 'radio' && <RadioGroup list={list} {...props} />
            }
          </div>
      }
    </>
  )
}