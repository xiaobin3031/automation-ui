import SingleElement from "./SingleElement";

export default function CombineElement(props){

  return (
    <fieldset className="combine-element">
      <legend>组合元素: {props.props.ele._id}</legend>
      <SingleElement {...props} />
    </fieldset>
  )
}