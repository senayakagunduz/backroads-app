import React from 'react'
import { footerLinks,footerIcons } from '../data'

const Footer = () => {
  return (
<footer className="section footer">
    <ul className="footer-links">
        {
            footerLinks.map((link)=>{
                const {id, href, text}=link;
                return(
                    <li key={id}>
                    <a href={href} className="footer-link" rel="noreferrer" >{text}</a>
                  </li> 
                )
            })
        }
    </ul>
    <ul className="footer-icons">
        {
            footerIcons.map((link)=>{
                const {id,href,icon}=link;
                return (
                <li key={id}>
                   <a href={{href}} target="_blank" className="footer-icon" rel="noreferrer">
                    <i className={icon}></i></a>
                   </li>
                )
            })
        }
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer