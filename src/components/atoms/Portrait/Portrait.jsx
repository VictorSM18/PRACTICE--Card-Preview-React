import PropTypes from 'prop-types'
import './styles.css'

export default function Portrait({ data }) {
  return (
    <header className='portrait'>
      <img src={data.portrait} alt='' />
    </header>
  )
}

Portrait.propTypes = {
  data: PropTypes.object.isRequired,
}
