import React from 'react';
import aboutUsImage from '../assets/about-us-image.png';
import testimonialsImage from '../assets/testimonials-image.png';
import ContactForm from '../components/ContactForm';
import CallToActionBanner from '../components/CallToActionBanner';

function HomePage() {
  return (
    <div>
      <section className="banner">
        <h1>Blue Ridge Buildings & Carports</h1>
        <img src="https://www.nps.gov/blri/learn/nature/images/Bear-Trap-Gap-MP-428-robert-Stevens-web.jpg" alt="BRBC Sales" className="banner-image" />
      </section>
      <CallToActionBanner />
      <section className="about-us">
        <div className="section-content">
          <img src={aboutUsImage} alt="About Us" className="section-image-left" />
          <div className="section-text">
            <h2>About Us</h2>
            <p>
              Using the old-fashioned, country tradition of barn building, we at Old Hickory Buildings and Sheds create quality storage buildings for many happy customers throughout North America. Our factories use the same traditional construction techniques and philosophies handed down from generation to generation among the many Amish and Mennonite communities. In fact, the kind of quality, care, and attention to detail that we put into each and every one of our barns is how we became leaders in our industry. Our overriding philosophy of quality can be seen in our company's culture every day. From the premium materials we use to the engineer certification process, and from our highly skilled and customer-friendly delivery drivers to our knowledgeable salespeople, you can be confident that you'll get the best building for your needs at a price within your budget.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="section-content">
          <div className="section-text">
            <h2>Recent Testimonials</h2>
            <p>“Y’all this is amazing they came in at 6:30 this morning and was done by lunch time if you need a shed contact the Marshall’s at Blue Ridge Building and Carports” - C.Crowder</p>
          </div>
          <img src={testimonialsImage} alt="Testimonials" className="section-image-right" />
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <h3>OUR STORE LOCATION</h3>
          <p>
            Address: 4524 Melrose Ave
            <br />
            Roanoke, VA 24422
          </p>

          <h3>CONTACT US</h3>
          <p>
            Phone: (540) 682-5465
            <br />
            Email: Sales@Domain.com
          </p>

          <h3>OPEN HOURS</h3>
          <p>
            Mon - Fri 9 AM - 5 PM
            <br />
            Saturday 9 AM - 5 PM
            <br />
            Sunday: Closed
          </p>

          <h3>Subscribe To Our Mailing List</h3>
          <p>
            To stay up to date on promotions and sales.
          </p>
        </div>
      </section>
      <ContactForm />
      <div style={{ marginBottom: '50px' }}></div>
    </div>
  );
}

export default HomePage;
