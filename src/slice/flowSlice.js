import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const nodeSlice = createSlice({
    name: "nodes",
    initialState: {
        nodes: [
            {
                id: "1",
                type: "textUpdater",
                position: { x: 0, y: 0 },
                data: { value: "" },
            },
        ],
        edges: [],
    },
    reducers: {
        setNodes: (state) => {
            let newNode = {
                id: uuidv4(),
                type: "textUpdater",
                position: { x: 0, y: state.nodes.length * 100 },
                data: { value: "" },
            };
            state.nodes = [...state.nodes, newNode];

            if (state.nodes.length > 0) {
                let lastNode = state.nodes[state.nodes.length - 1];
                let newEdge = { id: uuidv4(), source: lastNode.id, target: newNode.id };
                state.edges = [...state.edges, newEdge];
            }
        },
        updateNodeValue: (state, action) => {
            let nodes = [...state.nodes];
            let objectIndex = nodes.findIndex((obj) => obj.id === action.payload.id);
            if (objectIndex !== -1) {
                state.nodes[objectIndex] = {
                    ...nodes[objectIndex],
                    data: { value: action.payload.value },
                };
            }
        },
        deleteNode: (state, action) => {
            console.log(action.payload);
            const nodeId = action.payload;
            state.nodes = state.nodes.filter(node => node.id !== nodeId);
            state.edges = state.edges.filter(edge => edge.source !== nodeId && edge.target !== nodeId);
        },
        deleteEdge: (state, action) => {
            const edgeId = action.payload;
            state.edges = state.edges.filter(edge => edge.id !== edgeId);
        },
    },
});

export const { setNodes, updateNodeValue, deleteNode , deleteEdge } = nodeSlice.actions;

export default nodeSlice.reducer;