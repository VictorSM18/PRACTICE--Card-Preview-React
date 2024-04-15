import PropTypes from 'prop-types'
import './styles.css'

export default function Description({ data }) {
  return <p className='description'>{data.description}</p>
}

Description.propTypes = {
  data: PropTypes.object.isRequired,
}
