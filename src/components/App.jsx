import './styles.css'
import Card from './molecules/Card/Card.jsx'
import { data } from '../data.js'

export default function App() {
  return <Card data={data} />
}
