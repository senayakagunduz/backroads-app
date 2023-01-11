import React from 'react'
import { pageLinks } from '../data';

const NavLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {
        pageLinks.map((link)=>{
            const {id,href,text}=link;
            return (
                <li key={id}>
                    <a href={href} className={itemClass} rel="noreferrer"> {text} </a>
                </li>
            )
        })
    }
</ul>
  )
}

export default NavLinks