import { useContext, useState } from "react";
import { ISubtasks, ToDoListContext } from "../../context/ToDoListContext";
import { FiPlus } from "react-icons/fi";

interface ISubtasksProps extends ISubtasks {
  parentId: string
}

export default function Subtask ({parentId, id,content}:ISubtasksProps) {

  const [subtask, setNewSubtask] = useState<string>("")
  const [subtaskState, setSubtaskState] = useState<boolean>(false)

  const { changeSubtaskContent, deleteSubtask } = useContext(ToDoListContext)

  const handleKeyPress = (ev:React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter"){
      setSubtaskState(false)
      changeSubtaskContent(id, subtask, parentId)
    }
  }

  useState(()=>{
    setNewSubtask(content)
  })

  return (
    <li className={`
    flex items-center relative min-h-8 py-1 px-7 bg-light-theme-dark-grayish-blue/15 cursor-pointer
    hover:bg-light-theme-dark-grayish-blue/30
    last:border-b-[1px] last:border-light-theme-dark-grayish-blue/25
    odd:bg-light-theme-dark-grayish-blue/10
    odd:hover:bg-light-theme-dark-grayish-blue/20
    `}>
      <p className="w-11/12 text-sm lg:text-base text-light-theme-dark-grayish-blue overflow-hidden text-ellipsis" onClick={()=>{setSubtaskState(true)}}>{content}</p>
      {subtaskState && <input type="text" className={`
        absolute h-full w-5/6 top-0 rounded-lg px-2 outline-none text-sm text-light-theme-very-dark-grayish-blue-2
        focus:border-b-2 focus:border-primary-bright-blue
        lg:text-base
        `} onKeyDown={(ev)=>{handleKeyPress(ev)}} value={subtask} onChange={(ev)=>{setNewSubtask(ev.target.value)}}/>
      }
      <button className="absolute right-4 top-1/2 z-10 text-[#494C6Bcc] -translate-y-1/2" onClick={()=>{deleteSubtask(id, parentId)}}>
        <FiPlus className="rotate-45"/>
      </button>
    </li>
  ) 
}