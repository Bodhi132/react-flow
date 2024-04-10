// import React, { useCallback, useState, useRef } from "react";
// import {useDispatch , useSelector } from 'react-redux';
// import Reactflow, { Background} from 'reactflow'
// import 'reactflow/dist/style.css';
// import CustomNode from "./customNode.jsx";
// import { addNode, setNodes, setEdge , addEdge } from './slice/flowSlice.js';

// export default function App() {

//   const dispatch = useDispatch();
//   const nodes = useSelector(state => state.nodes);
//   const edges = useSelector(state => state.edges);
//   const nodeTypes = { textUpdater: CustomNode };

//   const yPos = useRef(20);

//   const addNodeCallback = useCallback(() => {
//     yPos.current += 50;
//     dispatch(addNode({
//       id: (nodes.length + 1).toString(),
//       type: 'textUpdater',
//       position: { x: 100, y: yPos.current },
//       data: { label: "yo" }
//     }));
//   }, [dispatch, nodes.length, yPos]);

//   const onConnect = useCallback(
//     (connection) => {
//       dispatch(addEdge(connection));
//     },
//     [dispatch],
//   );

//   return (
//     <div className="App" style={{ height: '100vh', width: '100vw' }}>
//       <button onClick={addNodeCallback}>Add</button>
//       <Reactflow
//         nodes={nodes}
//         edges={edges}
//         onConnect={onConnect}
//         onNodesChange={dispatch(setNodes(nodes))}
//         onEdgesChange={dispatch(setEdge(edges))}
//         nodeTypes={nodeTypes}
//       >
//         <Background />
//       </Reactflow>
//     </div>
//   );
// }
import React from 'react'
import Home from './pages/Home'
import Button from './components/Button'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }} className=' pl-7 pt-6'>
      <Home/>
    </div>
  )
}

export default App