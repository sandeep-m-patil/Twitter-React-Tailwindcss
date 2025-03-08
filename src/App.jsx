import AdditionalBar from "./components/AdditionalBar"
import Home from "./components/Home"
import SideBar from "./components/SideBar"

function App() {
 
  return (
   <>
    <div className="flex w-full h-screen"> 
    <SideBar/>
    <Home/>
    <AdditionalBar />
    </div>
   </>
  )
}

export default App
