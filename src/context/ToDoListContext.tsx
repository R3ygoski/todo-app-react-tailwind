import { createContext, ReactNode, useState } from "react";
import idGenerator from "../mod/idGenerator";
import { DropResult } from "@hello-pangea/dnd";

type TaskStatusType = "completed" | "uncompleted"
export interface IToDoList {
  id: string
  task: string
  status: TaskStatusType
}

interface IToDoListContext {
  toDoList: IToDoList[]
  createToDoItem: (content:string) => void
  deleteToDoItem: () => void
  deleteCompletedToDoItem: () => void
  dragToDoItem: (result:DropResult) => void
}

const ToDoListContext = createContext<IToDoListContext>({} as IToDoListContext)

const ToDoListProvider = ({children}:{children:ReactNode}) => {

  const [toDoList, setToDoList] = useState<IToDoList[]>([
    {
      id: idGenerator(8),
      status: "completed",
      task: "Study React"
    },
    {
      id: idGenerator(8),
      status: "uncompleted",
      task: "Study Vue"
    },
    {
      id: idGenerator(8),
      status: "uncompleted",
      task: "Study Angular"
    },
    {
      id: idGenerator(8),
      status: "uncompleted",
      task: "Study Svelte"
    }
  ])

  const createToDoItem = (content:string) => {
    setToDoList([...toDoList, 
      {
        id: idGenerator(8),
        status: "uncompleted",
        task: content
      }
    ]
  )}

  const deleteToDoItem = () => {

  }

  const deleteCompletedToDoItem = () => {
    const filteredList = toDoList.filter((task)=>(task.status==="uncompleted"))
    setToDoList(filteredList)
  }

  const dragToDoItem = (result:DropResult) => {
    if (!result.destination) return

    function reorder(list: IToDoList[], startIndex: number, finalIndex: number){
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(finalIndex, 0, removed)

      return result
    }
    
    const reorderedList = reorder(toDoList, result.source.index, result.destination.index)


    setToDoList(reorderedList)
  }

  return (
    <ToDoListContext.Provider value={{toDoList,createToDoItem,deleteCompletedToDoItem,deleteToDoItem,dragToDoItem}}>
      {children}
    </ToDoListContext.Provider>
  )
}

export {ToDoListProvider,ToDoListContext}