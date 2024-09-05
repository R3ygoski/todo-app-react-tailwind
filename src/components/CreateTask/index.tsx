import { useContext, useState } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"

export default function CreateTask () {

  const [task, setTask] = useState<string>("")

  const {createToDoItem} = useContext(ToDoListContext)

  const handleKeyPress = (ev:React.KeyboardEvent<HTMLFormElement>) => {
    if (ev.key === "Enter"){
      createToDoItem(task)
      setTask("")
    }
  }


  return (
    <form 
    onKeyDown={(ev)=>{handleKeyPress(ev)}} 
    onSubmit={(ev)=>{ev.preventDefault()}}
    className={`
    flex items-center relative mt-[6.5rem] w-full max-w-[592px] h-12 px-6
    lg:mt-36 lg:h-16
    `}>
      <input type="text" id="createToDo" value={task} onChange={(ev)=>{setTask(ev.target.value)}} 
      className={`
      peer w-full h-full rounded-md px-6 outline-none text-light-theme-very-dark-grayish-blue-2 shadow-lg
      focus:border-b-2 focus:border-primary-bright-blue
      lg:text-xl
      dark:bg-light-theme-very-dark-desaturated-blue dark:text-light-theme-light-grayish-blue
      `}/>
      <label htmlFor="createToDo" className={`
        absolute left-12 text-sm duration-300 ease-in-out
        peer-focus:-translate-y-8 peer-focus:left-8 peer-focus:font-bold peer-focus:text-light-theme-very-dark-blue
        lg:text-xl
        lg:peer-focus:-translate-y-12

        dark:text-dark-theme-very-light-gray
        dark:peer-focus:text-dark-theme-very-light-gray

        ${task.length>0?"-translate-y-8 left-8 text-light-theme-very-dark-blue lg:-translate-y-12 dark:text-dark-theme-very-light-gray":"text-light-theme-dark-grayish-blue"}
        `}>Create a new todo...</label>
    </form>
  ) 
}