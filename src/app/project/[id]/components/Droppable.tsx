import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 1,
    height: "100%",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
