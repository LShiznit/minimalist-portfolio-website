import { Children } from 'react'
import './Navbar.css'

export default function Navbar() {
   
   function addActive(path) {
      if (window.location.pathname === path) {
         return 'active '
      } else {
         return null
      }
   }

   return (
      <>
         <header>
            <nav id='navbar' className='container'>
               <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#33323D" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
               <ul>
                  <li><a className={ addActive('/') +'navLink'} href="/">HOME</a></li>
                  <li><a className={ addActive('/PortfolioIndex') +'navLink'} href='/PortfolioIndex'>PORTFOLIO</a></li>
                  <li><a className={ addActive('/Contact') +'navLink'} href='/Contact'>CONTACT ME</a></li>
               </ul>
            </nav>
         </header>
      </>
   )
}
