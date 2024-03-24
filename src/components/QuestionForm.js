import React, { useState } from 'react';
import FlippedCard from './FlippedCard';

function QuestionForm() {
  const [userQuestion, setUserQuestion] = useState('');
  const [responseText, setResponseText] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { mentor_id: "h9ghxb2", msg: userQuestion };

    fetch('https://kranthigv--mentorai-fastapi-app.modal.run/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResponseText(data[0].text); // Convert the full JSON response into a pretty-printed string
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setResponseText(['An error occurred. Please try again later.']); // Set an array with an error message
      setIsLoading(false);
    });
  };

  return (
    <div className="container" style={{display: 'flex'}}>
            <div style={{
        display: 'flex', // Enable Flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        width: '50%', // Take up half of the container's width
        height: '100vh' // Make the div full viewport height or adjust as needed
      }}>
      <form onSubmit={handleSubmit} className="form-container" style={{width: '50%',  textAlign: 'left'}}>
        <label className='input-label' htmlFor="userQuestion">Question for Elon Musk:</label><br />
        <textarea
        style={{ width: '464px', height: '213px', marginTop: '18px', font: '18px Inter, sans-serif' }}
          type="text"
          id="userQuestion"
          name="userQuestion"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          disabled={isLoading}
        /><br />
        <input
        className='submit-btn'
          type="submit"
          value={isLoading ? "Waiting for response..." : "Submit"}
          disabled={isLoading}
        />
      </form>
      </div>
      <style jsx>{`
        .input-label {
          color: #000;
          font: 30px GT Sectra Display Trial, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .submit-btn {
          
          background-color: #000;
          align-self: start;
          margin-top: 28px;
          color: #fff;
          justify-content: center;
          padding: 10px 10px;
          font: 18px Inter, sans-serif;
        }
      `}</style>
     
      <div className='card-container' style={{
      display: 'flex', // Enable Flexbox
      flexDirection: 'column', // Stack the images vertically
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      width: '50%', // Take up half of the container's width
      height: '100vh' // Make the div full viewport height or adjust as needed> 
      }}>
      <FlippedCard responseText={responseText} /> 
      </div>
  </div>
  );
}

export default QuestionForm;
