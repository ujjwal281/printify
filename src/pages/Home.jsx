import AboutItems from "../components/AboutItems";
import GiftBox from "../components/GiftBox"
import GiftOffer from "../components/GiftOffer"
import MerchantChart from "../components/MerchantChart";
const Home = () => {
  return (
    <div className="flex flex-col p-1 lg:container ">
      <div className="">
        <div className="text-3xl my-5 font-semibold mt-24 ">
            Welcome! Let&#44;s get down to business
        </div>
        <div className="flex flex-col gap-8 ">
            <GiftBox/>
            <GiftOffer/>
            <MerchantChart/>
            <AboutItems/>
        </div>
      </div>
    </div>
  )
}

export default Home