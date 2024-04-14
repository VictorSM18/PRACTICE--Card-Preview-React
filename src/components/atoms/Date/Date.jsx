import PropTypes from 'prop-types'
import './styles.css'

export default function Date({ data }) {
  return <p className='date'>{data.date}</p>
}

Date.propTypes = {
  data: PropTypes.object.isRequired,
}
