import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && <button onClick={onClick}>Doing</button>}
            {category !== "DOING" && <button onClick={onClick}>To Do</button>}
            {category !== "DOING" && <button onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo;
