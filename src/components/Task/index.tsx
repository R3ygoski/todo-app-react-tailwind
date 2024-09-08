import { Draggable } from "@hello-pangea/dnd"
import CheckIcon from "../../assets/svg/icon-check.svg"
import { useContext } from "react"
import { ISubtasks, ToDoListContext } from "../../context/ToDoListContext"
import Subtask from "../Subtask"
import { FiPlus } from "react-icons/fi"

interface ITask {
  task: string
  parentId: string
  index: number
  status: string
  subtasks: ISubtasks[]
}

export default function Task ({task, parentId, index, status, subtasks}:ITask) {

  const {setAsCompleted, deleteToDoItem, createToDoSubtask} = useContext(ToDoListContext)

  return (
    <Draggable draggableId={parentId} index={index}>
      {(provided)=>(
        <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          <div className={`
          grid grid-cols-10 min-h-[3.35rem] pl-2 py-4 border-light-theme-dark-grayish-blue/25 items-center
          active:rounded-lg active:bg-dark-theme-very-light-gray/50 active:backdrop-blur-sm
          lg:min-h-[3.975rem] lg:pl-6
          dark:active:bg-light-theme-very-dark-desaturated-blue/50
          ${subtasks.length<=0 && "border-b-[1px]"}
          ${subtasks.length>0 && "active:rounded-b-none"}
          `}>
            <div className={`
              row-start-1 place-self-center flex items-center justify-center size-5 rounded-full bg-gradient-to-br cursor-pointer
              hover:from-primary-cyan hover:to-primary-purple
              ${status==="completed" ? "from-primary-cyan to-primary-purple":"from-light-theme-dark-grayish-blue/25 to-light-theme-dark-grayish-blue/25"}
              lg:size-6
              `} 
              onClick={()=>{setAsCompleted(parentId)}}
              >
                {
                status==="completed" ? 
                <img src={CheckIcon} alt="" />
                :
                <div className={`
                  size-[18px] bg-white rounded-full
                  lg:size-[22px]
                  dark:bg-light-theme-very-dark-desaturated-blue
                  `}></div>
                }
            </div>
            <p className={`
              text-sm self-end row-start-1 col-start-2 col-end-9 cursor-grab overflow-hidden text-ellipsis
              lg:text-lg

              ${status==="completed" ? "line-through text-light-theme-dark-grayish-blue dark:text-light-theme-very-dark-grayish-blue-2":"text-light-theme-very-dark-desaturated-blue dark:text-light-theme-light-grayish-blue dark:hover:text-light-theme-light-grayish-blue-hv"}
              `}>
              {task}
            </p>
            <button aria-label="Delete Task" className="size-fit col-start-9 row-start-1 place-self-center lg:col-start-9" onClick={()=>{createToDoSubtask(parentId)}} title="Add Subtask">
              <FiPlus className="text-xl text-[#494C6B88]"/>
            </button>
            <button aria-label="Delete Task" className="size-fit col-start-10 row-start-1 place-self-center lg:col-start-10 rotate-45" onClick={()=>{deleteToDoItem(parentId)}} title="Delete Task">
              <FiPlus className="text-xl text-[#494C6B88]"/>
            </button>
          </div>
          {subtasks && 
          <ul className="flex flex-col gap-y-1">
            {subtasks.map((subtask)=>(
              <Subtask key={subtask.id} parentId={parentId} id={subtask.id} content={subtask.content}/>
            ))}
          </ul>
          }
        </li>
      )}
    </Draggable>
  ) 
}