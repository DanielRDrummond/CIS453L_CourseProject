import React from 'react';

function Reviews() {
  return (
    <div>
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <h3>John Doe</h3>
          <p>"Great service! I purchased a shed from Old Hickory Buildings and Sheds, and I'm extremely satisfied with the quality and craftsmanship."</p>
        </div>
        <div className="review">
          <h3>Jane Smith</h3>
          <p>"Highly recommend! The staff was very helpful, and the delivery process was smooth. Will definitely buy from them again!"</p>
        </div>
        {/* Add more reviews as needed */}
      </section>
    </div>
  );
}

export default Reviews;
