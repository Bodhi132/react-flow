import React from 'react'
import Button from '../components/Button';
import { useState, useCallback, useMemo, useEffect } from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    getIncomers,
    getOutgoers,
    addEdge,
    getConnectedEdges,
} from "reactflow";
import "reactflow/dist/style.css";
import { useSelector, useDispatch } from "react-redux";
import CustomNode from '../customNode';
import { deleteEdge } from '../slice/flowSlice';

const nodeTypes = { textUpdater: CustomNode };

const Home = () => {

    const dispatch = useDispatch();

    const initialNodes = useSelector((state) => state.nodes.nodes);
    const initialEdges = useSelector((state) => state.nodes.edges);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useEffect(() => {
        setNodes(initialNodes);
        setEdges(initialEdges);
    }, [initialNodes, setNodes, initialEdges, setEdges]);

    const onEdgeDelete = useCallback(
        (edgeId, edge) => dispatch(deleteEdge(edgeId)),
        [dispatch]
    );

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Button />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onElementsRemove={onEdgeDelete}
                nodeTypes={nodeTypes}
            />
        </div>
    )
}

export default Home