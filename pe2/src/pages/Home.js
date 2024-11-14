import React from 'react';
import './styles/Home.css';
import Footer from '../components/footer/footer'; // Adjust path as needed
import heroImage from '../images/Wedding+venue.jpg'; 
import venueImage1 from '../images/mobilephone.png'; 
import venueImage2 from '../images/paper.png'; 
import venueImage3 from '../images/printer.png'; 

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <img src={heroImage} alt="A descriptive alt text for SEO" className="hero-image" />
        <div className="hero-content">
          <h1>Trondheim City</h1>
          <p>Your best memories in life start here</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>

      {/* MAIN SECTION */}
      <h1 className="h1-main-section"> Next Venues </h1>
      <div className="main-section">
        <div className="box1">          
          <h2>Discover Our Venues</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
          <button className="new-section-button">Learn More</button>
        </div>

        <div className="box2">          
          <h2>Discover Our Venues</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
          <button className="new-section-button">Learn More</button>
        </div>

        <div className="box3">          
          <h2>Discover Our Venues</h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
          <button className="new-section-button">Learn More</button>
        </div>
      </div>

      {/* MAIN SECTION 2 */}

      <h1 className="h1-main-section"> How to get your ticket </h1>

      <div className="main-section2">

        <div className="box1">
          <img src={venueImage1} alt="Venue 1" className="venue-image" />
          <h2> App </h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
        </div>

        <div className="box2">
          <img src={venueImage2} alt="Venue 2" className="venue-image" />
          <h2> PDF On mobile </h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>
        </div>

        <div className="box3">
          <img src={venueImage3} alt="Venue 3" className="venue-image" />
          <h2> Print out </h2>
          <p>Explore a variety of venues suited for all kinds of events.</p>

        </div>    
    
      </div> {/* <-- Added this closing div for main-section2 */}

              <div className="ticketButton">
                       <button className="new-section-button">Få tilgang til din billett</button>
          </div>  

          <Footer /> {/* Footer component */}
 
    </>
  );
};

export default Home;

