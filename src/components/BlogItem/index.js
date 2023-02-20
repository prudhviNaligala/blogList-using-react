// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsListDetails} = props
  const {title, description, publishedDate} = blogsListDetails

  return (
    <div className="blog-item-container">
      <div className="item">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="line" />
    </div>
  )
}
export default BlogItem
