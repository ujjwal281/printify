const VideoCard = () => {
  return (
    <div className="bg-white border-black border-opacity-10 border p-7 gap-3 flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">How-to POD</h1>
        <div className="text-blue-600">See more</div>
      </div>
      <hr />
      <div className="flex ">
      <iframe  className="rounded-md w-full lg:w-80 h-60 lg:h-96 "  src="https://www.youtube.com/embed/jDbvPF20of0"></iframe>
      </div>

    </div>
  )
}

export default VideoCard