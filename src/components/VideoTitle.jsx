

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className="p-8 pl-16 w-max h-screen pt-64 relative  z-10 bg-gradient-to-r from-black/80">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="my-6 text-base max-w-[600px]">{overview}</p>
      <div className="flex gap-x-3">
        <button className="font-semibold hover:opacity-70 bg-white text-black px-12 text-xl rounded-md py-2 ">Play</button>
        <button className=" px-10 text-xl hover:opacity-80 bg-gray-500/60 text-white font-semibold  rounded-md py-2">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
