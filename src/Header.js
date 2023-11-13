import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";



function Header() {
  const [{basket}] = useStateValue();
  return (
    <div className='header'>
    <Link to ="/">
      <img 
          className="header_logo"
         src= 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''
      />  
    </Link>
            <div 
              className="header_search">
              <input className='header_searchInput'
                   type='text'
                   placeholder='enter your your requried items'
               />
               <SearchIcon className="header_searchIcon"/>
            </div>
            <div className='header_nav'>
            <Link to ="/login">
                <div className='header_option'>
                    <span className='header_optionLineone'>
                    Hello Guest
                    </span>
                    <span className='header_optionlinetwo'>
                    sign In
                    </span>
                </div>
             </Link>   


                <div className='header_option'>
                    <span className='header_optionLineone'>
                    return
                    </span>
                    <span className='header_optionlinetwo'>
                    &orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineone'>
                    your 
                    </span>
                    <span className='header_optionlinetwo'>
                    prime
                    </span>
                </div>
                <Link to ="/checkout">
                  <div className="header_optionBasket">
                   <ShoppingBagIcon />
                   <span className="header_optionLineTwo header_basketCount">
                    {basket.length}
                   </span>
                  </div>
                </Link>

            </div>
          

    </div>
    
    
  )
}

export default Header