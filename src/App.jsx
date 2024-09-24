import { SidebarWithBurgerMenu } from "./assets/ui/DefaultSidebar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="flex bg-gray-50 justify-center">
      <div className="  fixed flex  bg-white justify-between p-2 container z-40">
        <div className="text-3xl font-bold ">Printify</div>
        <div className=" ml-auto">
        <SidebarWithBurgerMenu />
        </div>
        <div>
          
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <Home/>
      </div>
    </div>
  )
}

export default App
