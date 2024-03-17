import React from 'react';

function Contact() {
  return (
    <div>
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
    </div>
  );
}

export default Contact;
