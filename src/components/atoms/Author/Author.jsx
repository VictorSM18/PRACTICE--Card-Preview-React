import PropTypes from 'prop-types'
import './styles.css'

export default function Author({ data }) {
  return (
    <div>
      <img src={data.authorPicture} alt='' />
      <p className='author-name'>{data.authorName}</p>
    </div>
  )
}

Author.propTypes = {
  data: PropTypes.object.isRequired,
}
