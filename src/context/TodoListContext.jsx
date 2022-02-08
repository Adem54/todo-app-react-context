import { createContext,useContext,useState } from "react";


const TodoListContext=createContext();

const initialTodoList=[
    {id:1,text:"studying examination",completed:false},
    {id:2,text:"meeting friends",completed:false},
   
];
export const TodoListProvider=({children})=>{
    const [todoList,setTodoList]=useState(initialTodoList);
    const [todoInput, setTodoInput] = useState("");
    const [searchTodo,setSearchTodo]=useState("");
    const values={
        todoList,setTodoList,todoInput,setTodoInput,searchTodo,setSearchTodo
    }

    return (
        <TodoListContext.Provider value={values}>
            {children}
        </TodoListContext.Provider>
    )
}

export const useTodoList=()=>useContext(TodoListContext);
export default TodoListContext;