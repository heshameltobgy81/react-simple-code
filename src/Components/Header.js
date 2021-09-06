import React from 'react';
import royals_logo from '../images/royals_logo.png';
import jamaica_logo from '../images/jamaica_logo.png';


const Header = () =>

<div className="header">
    <div>
        <div className="royals-logo">
            <img src={royals_logo} alt="Royals"/>
        </div>
        <div className="divider">vs</div>
        <div className="jamaica-logo">
            <img src={jamaica_logo} alt="Jamaica"/>
        </div>
    </div>
</div>


export default Header