//缓存调用
import { useRef } from "react"
import Tips from "../../../component/Tips";
import Element from "../Element"
import { uiBillField } from "../data/flowData"
import Select from "../../../component/Select";

export default function CacheFlow(){

  const valueMode = useRef(0);
  // const [valueMode, setValueMode] = useState(0); // todo 先试试useRef会不会刷新

  return (
    <div className="row">
      <Element />
      <div className="row">
        <label>取值方式</label>
        <label><input type="radio" name="valueMode" checked={valueMode.current === 0} onChange={() => valueMode.current = 0} />下标 <Tips title={"当前view是RecycleView等列表时生效"} /></label>
        <label><input type="radio" name="valueMode" checked={valueMode.current === 1} onChange={() => valueMode.current = 1} />uiBillField</label>
      </div>
      <div className="row">
        {
          valueMode.current === 0 &&
            <input type="number" value="0"/>
        }
        {
          valueMode.current === 1 &&
            <Select list={uiBillField} attr={{multiple: true}} />
        }
      </div>
    </div>
  )
}