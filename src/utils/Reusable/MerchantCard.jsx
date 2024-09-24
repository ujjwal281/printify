

const MerchantCard = () => {
  return (
    <div className=" flex flex-col gap-3 ">
            <div className=" relative w-72">
                <img className="h-full " src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/65df1ef19f947718f70c9882.jpg"  alt="img" />
                {/* <img className="h-full hidden" src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/65df1ef19f947718f70c9882.jpg"  alt="" /> */}
                <div className="text-sm p-1 absolute top-4 left-1 border-red-800 border-2 text-red-800 bg-yellow-300 opacity-85">Bestseller</div>
                <div className="absolute right-3 top-4 h-10 w-10 text-white p-2 bg-white border rounded-full"><svg className="text-white hover:border-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg> </div>
            </div>
            <div className="">
                <section>Unisex Heavy Cotton Tee</section>
                <section className="text-sm opacity-65">By Glidan . 5000</section>
            </div>
            <div>
                <section>From USD 8.64</section>
                <section className="text-sm text-green-400">From USD 6.36 with Printify Premium</section>
            </div>
            <div>
                <section className="opacity-65">8 sizes . 70 colors . 21 print providers</section>
            </div>
        </div>
  )
}

export default MerchantCard