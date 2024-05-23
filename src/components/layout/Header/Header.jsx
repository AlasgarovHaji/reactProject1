import React from 'react'
import style from './Header.module.css'
import logo from './logo.svg'

function Header() {
    return (
        
            <div className={style.displayFlex}>
                <ul>
                    <a href=""><img src={logo} alt="" /></a>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">How It Work</a></li>
                    <li><a href="#">Pricinq</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
                <div className={style.buttonDiv}>
                <button>
                    <a href="">Login</a>
                </button>
                <button>
                    <a href="">Sign Up</a>
                </button>
                </div>
                
            </div>
        
    )
}

export default Header