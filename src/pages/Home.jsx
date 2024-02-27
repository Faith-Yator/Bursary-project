import React, { useState } from 'react';
import './Home.css'; // Assuming you have a separate CSS file for styling

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="src\assets\WhatsApp Image .jpg" alt="Bursary Evaluation System" />
      </div>
      <div className="content-container">
        <h1>"Welcome to the Bursary Evaluation System"</h1>
        <p>
          Our objective is to provide a fair and transparent evaluation process
          for bursary applicants. We strive to identify and support deserving
          candidates who demonstrate academic excellence, leadership qualities,
          and financial need.
        </p>
        {showMore ? (
          <p>
            Our system ensures that scholarships are awarded equitably,
            empowering individuals to pursue their educational goals and
            contribute positively to society.
          </p>
        ) : null}
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Home;
