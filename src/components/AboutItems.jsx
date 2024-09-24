import BlogCard from '../utils/Reusable/BlogCard'
import VideoCard from '../utils/Reusable/VideoCard'
import WebinarsCard from '../utils/Reusable/WebinarsCard'

const AboutItems = () => {
  return (
    <div className='lg:flex justify-around gap-6'>
      <BlogCard/>
      <VideoCard/>
      <WebinarsCard/>
    </div>
  )
}

export default AboutItems