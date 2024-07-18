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

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com"
        }
    });
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("email", { required: "Emails is required" })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", { required: true })}
                    placeholder="firstName"
                />
                <input
                    {...register("lastName", { required: true })}
                    placeholder="lastName"
                />
                <input
                    {...register("username", { required: true, minLength: 10 })}
                    placeholder="username"
                />
                <input
                    {...register("password", { required: true })}
                    placeholder="password"
                />
                <input
                    {...register("password1", { required: "Password is required" })}
                    placeholder="password1"
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
