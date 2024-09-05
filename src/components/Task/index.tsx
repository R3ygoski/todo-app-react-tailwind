import { Draggable } from "@hello-pangea/dnd"
import CrossIcon from "../../assets/svg/icon-cross.svg"
import CheckIcon from "../../assets/svg/icon-check.svg"
import { useEffect, useState } from "react"

interface ITask {
  task: string
  id: string
  index: number
  status: string
}

export default function Task ({task, id, index, status}:ITask) {

  const [taskCompleted, setTaskCompleted] = useState<boolean>(false)

  const setAsCompleted = () => {
    status = "completed"
  }

  useEffect(()=>{
    if (status==="completed") {
      setTaskCompleted(true)
    } else {
      return
    }
  },[status])

  return (
    <Draggable draggableId={id} index={index}>
      {(provided)=>(
        <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className={`
        grid grid-cols-10 h-[3.35rem] pl-5 py-4 border-b-[1px] border-light-theme-dark-grayish-blue/25 items-center
        active:bg-dark-theme-very-light-gray/50 active:backdrop-blur-sm
        `}>
          <div className={`
            row-start-1 flex items-center justify-center size-5 rounded-full bg-gradient-to-br cursor-pointer
            hover:from-primary-cyan hover:to-primary-purple
            ${taskCompleted ? "from-primary-cyan to-primary-purple":"from-light-theme-dark-grayish-blue/25 to-light-theme-dark-grayish-blue/25"}
            `} 
            onClick={()=>{setTaskCompleted(!taskCompleted);setAsCompleted()}}
            >
              {
              taskCompleted ? 
              <img src={CheckIcon} alt="" />
              :
              <div className="size-[18px] bg-white rounded-full"></div>
              }
          </div>
          <p className="text-sm self-end row-start-1 col-start-2 col-end-10 cursor-grab">
            {task}
          </p>
          <button aria-label="Delete Task" className="size-3 col-start-10 row-start-1">
            <img src={CrossIcon} alt="" />
          </button>
        </li>
      )}
    </Draggable>
  ) 
}