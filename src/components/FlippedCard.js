import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

const FlippedCard = ({ responseText }) => { // Receive responseText as a prop
  return (
   
      <div className='card'>
        <div className='card-front'>
        <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
  className="img"
/>
<div style={{height: '50vh',   display: 'flex', // Enable Flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',}}>
          <CardFront responseText={responseText} /> {/* Pass responseText down to CardFront */}
          </div>
                <img
          style={{
            transform: 'scaleX(-1) scaleY(-1)' // Flip the image vertically and horizontally
          }}
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
        className="img"
      />
        </div>
        <div className='card-back'>
        <img
          style={{
            transform: 'scaleX(-1) ' // Flip the image vertically and horizontally
          }}
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
        className="img"
      />
      <div style={{height: '50vh',   display: 'flex', // Enable Flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',}}>
          <CardBack />
          </div>
          <img
          style={{transform: 'scaleX(1) scaleY(-1)'}}
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
  className="img"
/>
        </div>
      </div>
 
  );
};


// <div >
//         <img
//   loading="lazy"
//   src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
//   className="img"
// />
// <div style={{height: '40vh'}}>
//   <FlippedCard responseText={responseText} /> {/* Pass responseText as a prop */}
//   </div>
//   <img
//     style={{
//       transform: 'scaleX(-1) scaleY(-1)' // Flip the image vertically and horizontally
//     }}
//   loading="lazy"
//   src="https://cdn.builder.io/api/v1/image/assets/TEMP/24cfee4cfbba04c7c296a1e2b5dac0b2db1e25026492b926cdd4852325c16b30?apiKey=d42d03f8f61140eabd49e1452ecee5be&"
//   className="img"
// />
// </div>

export default FlippedCard;
