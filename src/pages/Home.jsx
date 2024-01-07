import React, { useState } from 'react';

const Home = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            cols="50"
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Home;
