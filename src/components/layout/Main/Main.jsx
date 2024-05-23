import React from 'react'
import style from './Main.module.css'
import photo from './man.png'
import payment from './payment.svg'

function Main() {
    return (
        <div className={style.mainStyle}>
            <div>
                <h1>Always Track <br /> & Analyze Your Business <br /> Statistics To Succeed.</h1>
                <p>A better way to manage your sales, team, clients & marketing — on a single platform. Powerful, affordable & easy.</p>
                <input type="text" placeholder='Enter your mail'/> <button>Get Started</button>
                <img src={payment} alt="" />
            </div>
            <div>
                <img src={photo} alt="" />
            </div>

        </div>
    )
}

export default Main