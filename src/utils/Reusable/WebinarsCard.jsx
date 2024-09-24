
const WebinarsCard = () => {
  return (
    <div className="bg-white border-black border-opacity-10 border flex flex-col gap-3 p-6">
      <div className="flex justify-between">
        <h1>Webinars</h1>
        <div className="text-green-600">See more</div>
      </div>
        <hr />
      <div>
        <img className="rounded-lg" src="https://printify.com/assets/img/dashboard/webinar-0-250.jpg" alt="" />
      </div>
      <div>
      From $0 to $250K in a Year: Learn From an Etsy Expert
      </div>
      <div className="flex justify-end">
        <button className="font-semibold border border-black p-2 border-opacity-15">Watch webinar</button>
      </div>
    </div>
  )
}

export default WebinarsCard