import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Reviews() {
  const starRating = 4.5; // Example star rating value
  const defaultReview = {
    name: 'John Doe',
    title: 'Satisfied Customer',
    description: 'I had a great experience with this product. It exceeded my expectations and I highly recommend it!',
    date: new Date().toLocaleDateString(),
  };
  // Function to generate star icons based on the rating
  const renderStarRating = () => {
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    return stars;
  };

  const cardItems = Array.from({ length: 6 }).map((_, index) => (
    <div className='col-10 col-md-4 mx-auto me-3' key={index}>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div className="star-rating">{renderStarRating()}</div>
            <small>{defaultReview.date}</small>
          </div>
          <Card.Title>{defaultReview.title}</Card.Title>
          <Card.Text>{defaultReview.description}</Card.Text>
          <Card.Text>{defaultReview.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div className='container' style={{ overflowX: 'auto' }}>
      <div className='row'>
         <div className='r_posters'>
        {cardItems}
      </div>
       </div>
    </div>
  );
}
