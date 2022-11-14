import './BtnSecondary.css'
import { Link } from 'react-router-dom'

export default function BtnSecondary({innerText, disable, linkTo}) {
   return (
      <>
         <Link to={linkTo} onClick={() => window.scrollTo(0, 0)}>
            <button className='btn-secondary' disabled={disable} >
               {innerText}
            </button>
         </Link>
      </>
   )
}