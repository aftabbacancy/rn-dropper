'use client';
import dynamic from 'next/dynamic';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DragDrop = dynamic(() => import('@/components/DragDrop'), {
  ssr: false,
});

const Project = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
};

export default Project;
