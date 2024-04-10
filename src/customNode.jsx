import { useCallback, useEffect,useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDispatch } from 'react-redux';
import {deleteNode} from './slice/flowSlice';
import './customNode.css';

function CustomNode({ data, isConnectable ,id }) {

  const [del, setDel] = useState(false)

  const dispatch = useDispatch();

  const { label } = data;

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node relative left-20 top-10 border-blue-300 border-2" onMouseEnter={()=>setDel(!del)} onMouseLeave={()=>setDel(!del)}>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">{label}</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
      {del && <button onClick={() => dispatch(deleteNode(id))} className="absolute right-0">
          x
        </button>}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default CustomNode;
