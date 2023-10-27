import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function Header() {
  return (
    <div className='header'>
        <img 
        className="header-logo"
        src='https://seeklogo.com/images/A/amazon-dark-logo-01F3CFFF03-seeklogo.com.png'
            />
            <div 
              className="header_search">
              <input className='header_searchInput'
                   type='text'
                   placeholder='enter your your requried items'
               />
               <SearchIcon className="header_searchIcon"/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineone'>
                    Hello Guest
                    </span>
                    <span className='header_optionlinetwo'>
                    sign In
                    </span>
                </div>
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
                  <div className="header_optionBasket">
                   <ShoppingBagIcon />
                   <span className="header_optionLineTwo header_basketCount">
                    0
                   </span>
                  </div>

            </div>
          

    </div>
    
    
  )
}

export default Header