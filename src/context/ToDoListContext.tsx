import { createContext, ReactNode, useEffect, useState } from "react";
import idGenerator from "../mod/idGenerator";
import { DropResult } from "@hello-pangea/dnd";

type TaskStatusType = "completed" | "uncompleted"
type TaskiFilterType = "all" | "uncompleted" | "completed"

interface IFeedback {
  message: string
  state: boolean
}

export interface ISubtasks {
  id: string
  content: string
}

export interface IToDoList {
  id: string
  task: string
  status: TaskStatusType
  subtasks: ISubtasks[]
}

interface IToDoListContext {
  toDoList: IToDoList[]
  taskFilter: TaskiFilterType
  feedbackState: IFeedback
  changeFilter: (type:TaskiFilterType) => void
  createToDoItem: (content:string) => void
  createToDoSubtask: (parentId:string) => void
  changeSubtaskContent: (id:string, newContent:string, parentId: string) => void
  setAsCompleted: (id:string) => void
  deleteToDoItem: (id:string) => void
  deleteCompletedToDoItem: () => void
  deleteSubtask: (id:string, parentId:string) => void
  dragToDoItem: (result:DropResult) => void
}

const ToDoListContext = createContext<IToDoListContext>({} as IToDoListContext)

const ToDoListProvider = ({children}:{children:ReactNode}) => {

  const [toDoList, setToDoList] = useState<IToDoList[]>(()=>{
    const list = localStorage.getItem("toDoList")
    return list ? JSON.parse(list) : []
  })
  const [taskFilter, setTaskFilter] = useState<TaskiFilterType>("all")
  const [feedbackState, setFeedbackState] = useState<IFeedback>({
    message: "",
    state: false
  })

  useEffect(()=>{
    if (toDoList.length > 0){
      localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
  },[toDoList])


  const changeFilter = (type:TaskiFilterType) => {
    setTaskFilter(type)
  }


  const createToDoItem = (content:string) => {
    setToDoList([...toDoList, 
      {
        id: idGenerator(8),
        status: "uncompleted",
        task: content,
        subtasks: []
      }
    ])
    setFeedbackState({
      message: "Task created successfully!",
      state: true
    })
    setTimeout(()=>{
      setFeedbackState({
        message: "...", 
        state: false
      })
    },3000)
  }

  const createToDoSubtask = (parentId:string) => {
    toDoList.find((item)=>{
      if(item.id === parentId){
        return {...item, subtasks: item.subtasks.push({
          id: idGenerator(10),
          content: "Type here..."
        })}
      }
    })

   setToDoList([...toDoList])
  }

  const changeSubtaskContent = (id:string, newContent:string, parentId: string) => {
    toDoList.find((task)=>{
      if (task.id === parentId){
        return {...task, subtasks: task.subtasks.find((subtask)=>{
          if (subtask.id === id){
            subtask.content = newContent
          }
        })}
      }
    })

    setToDoList([...toDoList])
  }

  const setAsCompleted = (id:string) => {
    const updatedToDoList:IToDoList[] = toDoList.map((item)=>{
      if (item.id === id){
        return {...item, status: item.status === "completed" ? "uncompleted" : "completed"}
      }
      return item
    })

    setToDoList(updatedToDoList)
  }

  const deleteToDoItem = (id:string) => {
    const filteredList = toDoList.filter((item)=>(
      item.id !== id
    ))
    setToDoList(filteredList)
    localStorage.setItem("toDoList", JSON.stringify(filteredList))
  }

  const deleteCompletedToDoItem = () => {
    const filteredList = toDoList.filter((task)=>(task.status==="uncompleted"))
    setToDoList(filteredList)
    localStorage.setItem("toDoList", JSON.stringify(filteredList))
  }

  const deleteSubtask = (id: string, parentId: string) => {
    const updatedList = toDoList.map((task)=>{
      if (task.id === parentId){
        return {...task, subtasks: task.subtasks.filter((subtask)=>{
          return subtask.id !== id
        })}
      }
      return task
    })
    
    setToDoList(updatedList)
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
    <ToDoListContext.Provider value={{toDoList,taskFilter,feedbackState,changeFilter,createToDoItem,createToDoSubtask,changeSubtaskContent,deleteCompletedToDoItem,setAsCompleted,deleteToDoItem,deleteSubtask,dragToDoItem}}>
      {children}
    </ToDoListContext.Provider>
  )
}

export {ToDoListProvider,ToDoListContext}