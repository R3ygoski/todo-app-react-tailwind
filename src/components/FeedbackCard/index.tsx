import { useContext } from "react"
import { ToDoListContext } from "../../context/ToDoListContext"

import { FaCheckCircle } from "react-icons/fa"

export default function FeedbackCard () {

  const { feedbackState } = useContext(ToDoListContext)

  return (
    <>
      <article role="alert" aria-live="polite" className={`
        flex items-center absolute z-10 w-64 p-2 gap-x-4 rounded-md text-center bg-gradient-to-b from-green-400/60 to-green-600/60 border-2 border-light-theme-very-dark-blue/75 shadow-xl duration-300 backdrop-blur-sm
        ${feedbackState.state ? "animate-feedback" : "hidden"}
      `}>
        <FaCheckCircle className="text-white"/>
        <p className="text-white">{feedbackState.message}</p>
      </article>
    </>
  ) 
}