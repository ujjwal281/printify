
const GiftOffer = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse bg-white ">
        <div className="flex flex-col gap-6 p-7">
        <header className="font-bold text-4xl ">Double your chances of makng that first sale!</header>
        <p>Stand out from competition and build a customer base with the help of our AI powered Niche Generator in less than a minute</p>
        <div className="flex gap-10 ">
            <button className="border-black border border-opacity-15 px-4 p-2 hover:bg-green-700 duration-200 rounded-md">Try it now</button>
            <section className="flex justify-center items-center font-semibold hover:bg-gray-200 p-3 px-6 hover:cursor-pointer ">What&apos;s a niche</section>
        </div>
        </div>
        <div className="">
            <img src="https://printify.com/assets/img/niche/niche-preview-lg.png" alt="" />
        </div>
    </div>
  )
}

export default GiftOffer