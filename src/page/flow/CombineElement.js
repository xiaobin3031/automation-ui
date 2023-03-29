import SingleElement from "./SingleElement";

export default function CombineElement(ele){

  return (
    <div className="combine-element">
      <SingleElement props={ele} />
    </div>
  )
}