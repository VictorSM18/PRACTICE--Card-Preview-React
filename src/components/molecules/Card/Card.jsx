import PropTypes from 'prop-types'
import './styles.css'
import Date from '../../atoms/Date/Date.jsx'
import Description from '../../atoms/Description/Description.jsx'
import Portrait from '../../atoms/Portrait/Portrait.jsx'
import Title from '../../atoms/Title/Title.jsx'
import Tag from '../../atoms/Tag/Tag.jsx'

export default function Card({ data }) {
  return (
    <div className='card'>
      <Portrait data={data} />
      <Tag data={data} />
      <Date data={data} />
      <Title data={data} />
      <Description data={data} />
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}
