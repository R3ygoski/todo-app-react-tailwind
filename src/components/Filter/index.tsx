import { useContext } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"

export default function Filter() {

  const {toDoList, taskFilter, changeFilter, deleteCompletedToDoItem} = useContext(ToDoListContext)

  return (
    <footer className={`
    flex justify-between items-center relative min-h-12 px-4 rounded-lg bg-dark-theme-very-light-gray text-light-theme-dark-grayish-blue shadow-lg
    lg:px-6
    dark:bg-light-theme-very-dark-desaturated-blue
    `}>
      <p className="text-sm">
        {toDoList.filter((task) => (task.status === "uncompleted")).length} itens left
      </p>
      <div className={`
        flex justify-center absolute -bottom-16 left-0 right-0 py-4 rounded-lg gap-x-4 bg-dark-theme-very-light-gray shadow-2xl
        lg:static lg:py-0 lg:shadow-none
        dark:bg-light-theme-very-dark-desaturated-blue 
        `}>
        <button className={`
          text-sm font-bold
          dark:hover:text-light-theme-light-grayish-blue-hv
          ${taskFilter==="all"?"text-primary-bright-blue":""}
          `} 
          onClick={()=>{changeFilter("all")}}>All</button>
        <button className={`
          text-sm font-bold
          dark:hover:text-light-theme-light-grayish-blue-hv
          ${taskFilter==="uncompleted"?"text-primary-bright-blue":""}
          `} 
          onClick={()=>{changeFilter("uncompleted")}}>Active</button>
        <button className={`
          text-sm font-bold
          dark:hover:text-light-theme-light-grayish-blue-hv
          ${taskFilter==="completed"?"text-primary-bright-blue":""}
          `} 
          onClick={()=>{changeFilter("completed")}}>Completed</button>
      </div>
      <button onClick={() => { deleteCompletedToDoItem() }} className={`
        text-sm dark:hover:text-light-theme-light-grayish-blue-hv
      `}>Clear Completed</button>
    </footer>
  )
}