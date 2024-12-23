import React from 'react';
import Header from '../components/Header';
import Largelmage from '../components/Largelmage';
import ImageDetail from '../components/ImageDetail';
import SimilarImages from '../components/SimilarImages';
import Footer from '../components/Footer';

const PhotoDetailPage = () => {
  return <div>
    <Header/>
    <Largelmage/>
    <ImageDetail/>
    <SimilarImages/>
    <Footer/>
  </div>;
};

export default PhotoDetailPage;
