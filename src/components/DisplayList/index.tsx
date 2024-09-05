import { Droppable } from "@hello-pangea/dnd"
import Task from "../Task"
import { useContext } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"

export default function DisplayList () {

  const {toDoList, deleteCompletedToDoItem} = useContext(ToDoListContext)

  return (
    <section className="flex flex-col justify-between absolute top-[10.75rem] w-[85%] max-w-[542px] max-h-[60vh] rounded-lg shadow-lg bg-dark-theme-very-light-gray">
      <Droppable droppableId="todoList" direction="vertical" type="list">
        {(provided)=>(
          <ul ref={provided.innerRef} {...provided.droppableProps} className="overflow-y-scroll scrollbar-none">
            {toDoList.map((task, idx)=>(
              <Task key={task.id} task={task.task} id={task.id} index={idx} status={task.status}/>
            ))}
          {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <footer className="flex justify-between items-center min-h-12 px-4 rounded-b-lg bg-dark-theme-very-light-gray text-light-theme-dark-grayish-blue">
        <p className="text-sm">
          {toDoList.filter((task)=>(task.status==="uncompleted")).length} itens left
        </p>
        <button onClick={()=>{deleteCompletedToDoItem()}} className="text-sm">Clear Completed</button>
      </footer>
    </section>
  ) 
}