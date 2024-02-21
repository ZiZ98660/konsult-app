import BlogCard from "@/components/BlogCard"
// import { Card } from "@/components/Card"
import { Title, TitleSm } from "@/components/Title"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='sass-container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
