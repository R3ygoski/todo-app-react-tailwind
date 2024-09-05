import CreateTask from "./components/CreateTask"
import HeaderBanner from "./components/HeroBanner"

function App() {

  return (
    <main className="flex flex-col items-center w-full h-screen bg-slate-200">
      <HeaderBanner/>
      <CreateTask/>
    </main>
  )
}

export default App
