import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./Cards"; 
import { SortableTaskCardProps } from "../types";


const SortableTaskCard = ({ task }: SortableTaskCardProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: String(task.id),
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TaskCard {...task}  />{" "}
        </div>
    );
};
export default SortableTaskCard;
