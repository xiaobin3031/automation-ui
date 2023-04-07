import '../css/x.css'

export default function Input({inputType='text', attrs}){

  return (
    <input type={inputType} className="x-input" {...attrs}/>
  )
}