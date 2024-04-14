import PropTypes from 'prop-types'
import './styles.css'

export default function Title({ data }) {
  return <h3 className='title'>{data.title}</h3>
}

Title.propTypes = {
  data: PropTypes.object.isRequired,
}
