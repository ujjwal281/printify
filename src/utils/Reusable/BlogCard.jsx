
const BlogCard = () => {
  return (
    <div className="bg-white border-black border-opacity-10 border flex flex-col gap-3 p-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Printify Blog</h1>
        <div className="text-green-400 hover:text-green-400 cursor-pointer">See more</div>
      </div>
      <hr />
      <div>
        <img className="rounded-lg" src="https://printify.com/wp-content/uploads/2023/11/Holiday-Guide-2023-%E2%80%93-Tackle-the-Shopping-Season-Like-a-Pro-768x432.jpg" alt="" />
      </div>
      <div>
      Holiday Guide 2024 – Tackle the Shopping Season Like a Pro
      </div>
      <div className="flex justify-end">
        <button className="border-black border border-opacity-15 px-6 p-2 font-bold  hover:bg-green-600 duration-75 cursor-pointer">Read article</button>
      </div>
    </div>
  )
}

export default BlogCard