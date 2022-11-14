
import BtnSecondary from "../buttons/BtnSecondary"
import ContactLink from "../components/ContactLink"
import { useState } from "react"

export default function PortfolioDetail({i}) {
   const [index, setIndex] = useState(i)
   const portfolio = [
      {id: 'Manage', hero: "/images/detail/desktop/image-manage-hero@2x.jpg", preview1: "/images/detail/desktop/image-manage-preview-1@2x.jpg", preview2: "/images/detail/desktop/image-manage-preview-2@2x.jpg", abstract: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.', background: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'},
      {id: 'Bookmark', hero: "/images/detail/desktop/image-bookmark-hero@2x.jpg", preview1: "/images/detail/desktop/image-bookmark-preview-1@2x.jpg", preview2: "/images/detail/desktop/image-bookmark-preview-2@2x.jpg", abstract: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.', background: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'},
      {id: 'Insure', hero: "/images/detail/desktop/image-insure-hero@2x.jpg", preview1: "/images/detail/desktop/image-insure-preview-1@2x.jpg", preview2: "/images/detail/desktop/image-insure-preview-2@2x.jpg", abstract: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.', background: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'},
      {id: 'Fylo', hero: "/images/detail/desktop/image-fylo-hero@2x.jpg", preview1: "/images/detail/desktop/image-fylo-preview-1@2x.jpg", preview2: "/images/detail/desktop/image-fylo-preview-2@2x.jpg", abstract: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.', background: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'},
   ]

   function indexRe(i) { //REASSIGN INDEX TO START/END
      if(i > (portfolio.length - 1) ){
         return 0
      } else if (i < 0) {
         return (portfolio.length - 1)
      } else {
         return i
      }
   }


   
   return (
      <main className="container" id="portfolioDetail">
         
         <section className="heroImg">
            <img src={portfolio[index].hero} alt="site-hero" />
         </section>
         <section className="info">
            <div className="abstract">
               <h2>{portfolio[index].id}</h2>
               <p>{portfolio[index].abstract}</p>
               <div>Interaction Design / Front End Development</div>
               <div>HTML / CSS / JS</div>
               <BtnSecondary innerText={'visit website'} />
            </div>
            <div className="details">
               <div className="background">
                  <h3>Project Background</h3>
                  <p>{portfolio[index].background}</p>
               </div>
               <div className="previews">
                  <h3>Static Previews</h3>
                  <img src={portfolio[index].preview1} alt="preview-1" />
                  <img src={portfolio[index].preview2} alt="preview-2" />
               </div>
            </div>
         </section>
         <div id="arrows">
            <div id="arrowLeft" onClick={() => setIndex((indexRe(index-1)))}>
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>
               <div>
                  <h3>{portfolio[(indexRe(index-1))].id}</h3>
                  <p>Previous Project</p>
               </div>
            </div>
            <div id="arrowRight" onClick={() => setIndex((indexRe(index+1)))}>
               <div>
                  <h3>{portfolio[(indexRe(index+1))].id}</h3>              
                  <p>Next Project</p>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>
            </div>
         </div>
         <ContactLink />
      </main>
   )
}