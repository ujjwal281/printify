import { SidebarWithBurgerMenu } from "./assets/ui/DefaultSidebar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="md:flex md:justify-center">
    <div className="flex bg-gray-50">
      <div className="  fixed flex  bg-white justify-between p-2 container z-40 my-5">
        <div className="text-3xl font-bold ">Printify</div>
        <div className=" ml-auto">
        <SidebarWithBurgerMenu />
        </div>
        <div>
          
        </div>
      </div>

      <div className="container">
        <Home/>
      </div>
    </div>
    </div>
  )
}

export default App
