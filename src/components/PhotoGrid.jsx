import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PhotoGrid.scss';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  
  // 환경변수 확인을 위한 로그
  console.log('All env:', process.env);
  console.log('API KEY:', process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    console.log('Using API KEY:', API_KEY);  // API 키 확인

    axios.get('https://api.unsplash.com/photos', {
      headers: {
        'Authorization': `Client-ID ${API_KEY}`
      },
      params: {
        count: 20
      }
    })
    .then(response => {
      setPhotos(response.data);
    })
    .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.urls?.regular} alt={photo.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;