import './ContactLink.css'
import BtnSecondary from "../buttons/BtnSecondary"

export default function ContactLink() {
   return (
      <div id="contactLink">
         <h2>Interested in doing a project together?</h2>
         <div></div>
         <BtnSecondary innerText={"Contact me"} linkTo='/Contact'></BtnSecondary>
      </div>
   )
}