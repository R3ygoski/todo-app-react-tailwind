import { Droppable } from "@hello-pangea/dnd"
import Task from "../Task"
import { useContext } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"
import Filter from "../Filter"

export default function DisplayList () {

  const {toDoList, taskFilter} = useContext(ToDoListContext)

  return (
    <section className={`
    flex flex-col justify-between absolute top-[10.75rem] w-[85%] max-w-[542px] max-h-[60vh] rounded-lg shadow-2xl bg-dark-theme-very-light-gray
    lg:top-[15.5rem]
    `}>
      <Droppable droppableId="todoList" direction="vertical" type="list">
        {(provided)=>(
          <ul ref={provided.innerRef} {...provided.droppableProps} className="overflow-y-scroll scrollbar-none">
            {taskFilter==="all"? toDoList.map((task, idx)=>(
              <Task key={task.id} task={task.task} id={task.id} index={idx} status={task.status}/>
            )): toDoList.filter((task) => (task.status === taskFilter)).map((task, idx)=>(
              <Task key={task.id} task={task.task} id={task.id} index={idx} status={task.status}/>
            ))}
          {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Filter/>
      <p className={`
        absolute -bottom-28 w-full text-center text-light-theme-dark-grayish-blue
        lg:-bottom-20
        `}>Drag and drop to reorder list</p>
    </section>
  ) 
}