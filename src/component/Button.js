import '../css/button.css'

export default function Button({children, type="button", color, outline, ...props}){

  const _classList = ['x-button', color];
  if(outline){
    _classList.push('outline');
  }
  return (
    <button className={_classList.join(' ')} type={type} {...props}>{children}</button>
  )
}