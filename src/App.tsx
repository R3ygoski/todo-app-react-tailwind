import CreateTask from "./components/CreateTask"
import HeaderBanner from "./components/HeroBanner"
import DisplayList from "./components/DisplayList"
import { DragDropContext } from "@hello-pangea/dnd"
import { useContext } from "react"
import { ToDoListContext } from "./context/ToDoListContext"
import FeedbackCard from "./components/FeedbackCard"

function App() {

  const {dragToDoItem} = useContext(ToDoListContext)

  return (
    <>
      <FeedbackCard/>
      <HeaderBanner/>
      <main className={`
        flex flex-col items-center w-full h-screen
        dark:bg-light-theme-very-dark-blue
        `}>
        <CreateTask/>
        <DragDropContext onDragEnd={dragToDoItem}>
          <DisplayList/>
        </DragDropContext>
      </main>
    </>
  )
}

export default App
