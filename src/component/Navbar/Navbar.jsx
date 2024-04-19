import './Navbar.scss'
import {Search, ShoppingCart} from 'lucide-react'
import Swiper from '../SwiperComp/SwiperComp'


const Navbar = () =>  {
  return (
    <div className='navbar'>
        <div className="navbar__search">
            <div className="navbar__search--input">
                <input type="text" placeholder='What would you like to drink today?'/>
                <Search size={"24px"} color='rgb(202, 202, 202)' className='navbar__search--input--searchIcon' />
            </div>
            <div className='navbar__search--cart'></div>
            <ShoppingCart size={"30px"} color='rgb(93, 64, 55)' className='navbar__search--cartIcon' />
        </div>
            <div className="navbar__swiper">
                <Swiper/>
            </div>
            <div className="navbar__filter">
        <h2>filter</h2>
            </div>
    </div> 
  )
}

export default Navbar