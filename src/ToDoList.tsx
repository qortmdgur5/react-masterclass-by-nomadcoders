import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setToDo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo);
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("email")} placeholder="Email" />
                <input {...register("firstName")} placeholder="firstName" />
                <input {...register("lastName")} placeholder="lastName" />
                <input {...register("username")} placeholder="username" />
                <input {...register("password")} placeholder="password" />
                <input {...register("password1")} placeholder="password1" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
