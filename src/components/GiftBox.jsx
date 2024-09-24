
const GiftBox = () => {

  return (
    <div className="w-fit bg-white p-8">
      <div className="lg:grid lg:grid-cols-3">
        <div className=" lg:flex hidden  ">
          <section className="text-3xl  font-bold">Create your first store and <span className="text-green-400">get a free gift</span>! </section>
          <section className="flex justify-center">
            <img src="https://printify.com/assets/img/dashboard/gift-closed.svg" alt="" />
          </section>
        </div>
        <div className="flex flex-col gap-3 col-span-2 ">
          <section className="text-xl font-bold flex justify-between">
            <div>Store setup checklist</div>
            <div >^</div>
          </section>
          <hr />
          <div className={`flex flex-col gap-2 font-semibold text-sm `}>
          <section className="flex justify-between cursor-pointer p-2 opacity-40">
              <div>Sign up for Printify</div>
              <div className="w-60">
              </div>
            </section>
            <section className="flex justify-between hover:bg-gray-100 cursor-pointer p-2 sm:flex-row flex-col ">
              <div>Create your first product</div>
              <div className="w-60 p-1.5">
              <div className=" bg-gray-200 rounded-full h-1.5 dark:bg-gray-700"><div className="bg-green-600 md:h-1.5 h-1 rounded-full" style={{width: "25%"}}></div>
              </div>
              </div>
            </section>
            <section className="flex  justify-between hover:bg-gray-100 cursor-pointer p-2 gap-2 sm:flex-row flex-col">
              <div>Connect to Etsy, Shopify, etc</div>
              <div className="w-60 p-1.5">
              <div className=" bg-gray-200 rounded-full md:h-1.5 h-1 dark:bg-gray-700"><div className="bg-green-600 h-1.5 rounded-full" style={{width: "15%"}}></div>
              </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-end gap-3 my-3">
        <div className="flex justify-center items-center">Complete the steps above and earn a $5.00 discount on your next order!</div>
        <div className="">
          <button className="bg-green-600 text-white p-3 text-lg font-bold w-full">
            + create first product
          </button>
        </div>
      </div>
    </div>
  )
}

export default GiftBox