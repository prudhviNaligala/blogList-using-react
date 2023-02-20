// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogsListDetails} = props

  return (
    <div className="blog-list-container">
      {blogsListDetails.map(eachList => (
        <BlogItem
          key={eachList.id}
          value={eachList.id}
          blogsListDetails={eachList}
        />
      ))}
    </div>
  )
}

export default BlogList
