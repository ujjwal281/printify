
import MerchantCard from "../utils/Reusable/MerchantCard"

const MerchantChart = () => {
  return (
    <div className="bg-white flex flex-col gap-2 p-4 relative ">
        <div className="text-xl font-bold ">Our BestSellers</div>
        <hr />
        <div  className="flex gap-5 justify-evenly overflow-x-auto  scroll-smooth "  >
            {/* <div className="absolute z-20 top-1/2 left-0 p-2 border border-black bg-gray-200  2xl:hidden" onClick={()=>{handlescroll(-50)}} >&lt;</div> */}
            <MerchantCard/>
            <MerchantCard/>
            <MerchantCard/>
            <MerchantCard/>
            {/* <div className="absolute z-20 top-1/2 right-0 p-2 text-lg bg-blue-gray-200 border border-black 2xl:hidden" onClick={()=>{handlescroll(+50)}}>&gt;</div> */}

        </div>
    </div>
  )
}

export default MerchantChart