import PropTypes from 'prop-types'
import './styles.css'

export default function Tag({ data }) {
  return <p className='tag'>{data.tag}</p>
}

Tag.propTypes = {
  data: PropTypes.object.isRequired,
}
