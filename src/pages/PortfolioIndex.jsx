import manage2x from "../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"
import insure2x from "../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"
import fylo2x from "../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"
import bookmark2x from "../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"
import BtnSecondary from "../buttons/BtnSecondary"
import ContactLink from "../components/ContactLink"

import './PortfolioIndex.css'

export default function PortfolioIndex() {
   return (
      <main className="container" id="portfolioIndex">
         <section>
            <img src={manage2x} alt="manage-2x" />
            <div>
               <h2>Manage</h2>
               <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
               <BtnSecondary innerText={'view project'} linkTo='/PortfolioDetail/Manage'/>
            </div>
         </section>
         <section>
            <img src={bookmark2x} alt="bookmark-2x" />
            <div>
               <h2>Bookmark</h2>
               <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
               <BtnSecondary innerText={'view project'} linkTo='/PortfolioDetail/Bookmark'/>
            </div>
         </section>
         <section>
            <img src={insure2x} alt="insure-2x" />
            <div>
               <h2>Insure</h2>
               <p>This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
               <BtnSecondary innerText={'view project'} linkTo='/PortfolioDetail/Insure'/>
            </div>
         </section>
         <section>
            <img src={fylo2x} alt="fylo-2x" />
            <div>
               <h2>Fylo</h2>
               <p>This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.</p>
               <BtnSecondary innerText={'view project'} linkTo='/PortfolioDetail/Fylo'/>
            </div>
         </section>
         <ContactLink />
      </main>
   )
}