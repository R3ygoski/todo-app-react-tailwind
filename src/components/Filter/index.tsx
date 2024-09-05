import { useContext } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"

export default function Filter() {

  const {toDoList, deleteCompletedToDoItem} = useContext(ToDoListContext)

  return (
    <footer className={`
    flex justify-between items-center min-h-12 px-4 rounded-lg bg-dark-theme-very-light-gray text-light-theme-dark-grayish-blue
    lg:px-6
    `}>
      <p className="text-sm">
        {toDoList.filter((task) => (task.status === "uncompleted")).length} itens left
      </p>
      <div className="flex gap-x-4">
        <button className="text-sm font-bold">All</button>
        <button className="text-sm font-bold">Active</button>
        <button className="text-sm font-bold">Completed</button>
      </div>
      <button onClick={() => { deleteCompletedToDoItem() }} className="text-sm">Clear Completed</button>
    </footer>
  )
}