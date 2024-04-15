import PropTypes from 'prop-types'
import './styles.css'

export default function Author({ data }) {
  return (
    <div className='author'>
      <img src={data.authorPicture} alt='' />
      <p className='author-name'>{data.authorName}</p>
    </div>
  )
}

Author.propTypes = {
  data: PropTypes.object.isRequired,
}
