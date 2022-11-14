import BtnPrimary from "../buttons/BtnPrimary"
import BtnSecondary from "../buttons/BtnSecondary"
import hero2x from "../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
import profile2x from "../assets/images/homepage/desktop/image-homepage-profile@2x.jpg"
import ContactLink from "../components/ContactLink"
import './Home.css'

export default function Home() {
   return (
      <main className="container" id="home">
         <section className="hero">
            <img src= {hero2x} alt="hero-2x" className="hero2x"/>
            <div>
               <h1>Hey, I'm Alex Spencer and I love building beautiful websites</h1>

               <BtnPrimary innerText={'about me'} hashLocation='#aboutme' />
            </div>
         </section>
         <section id="aboutme">
            <img src= {profile2x} alt="profile-2x"  />
            <div>
               <h2>About Me</h2>
               <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
               <BtnSecondary innerText={"Go to protfolio"} linkTo='/PortfolioIndex'></BtnSecondary>
            </div>
         </section>
         <ContactLink />
      </main>
   )
}
// window.location.href 