import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

const Home = ({ type }) => {
  return (
    <div className='home'>
     <Navbar />
     <Featured type={type} />
     <List />
    </div>
  )
}

export default Home