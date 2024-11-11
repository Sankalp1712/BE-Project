import React from 'react';
import './Home.css';  // Assuming you have a separate CSS file for Home styles
import {Link} from 'react-router-dom';
import fakeImage from '../images/fake_image.jpg';
import realImage from '../images/real_image.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* First Section with background image */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <h2>Your Awesome Heading Here</h2>
            <p>This is some text over the background image</p>
          </div>
          <div className="hero-button">
            <Link to='/detect' className='btn-text'>detect !</Link>
          </div>
        </div>
      </section>

      {/* Second Section with headings and images in grid */}
      <section className="content-section">
        <div className="content-text">
        <h1>What is DeepFake</h1>
        <p>
        Deepfake technology uses artificial intelligence to create highly realistic, but fake, audio and video content. By analyzing and mimicking real voices and faces, it can make people appear to say or do things they never actually did. Originally developed for entertainment, deepfakes have raised concerns due to their potential misuse in spreading misinformation. They can be hard to detect, making it essential for users to be cautious about videos shared online. Awareness and detection tools are crucial for identifying deepfake content accurately.
        </p>
        <h5>Example Image</h5>
        </div>
        

        {/* Grid layout for images */}
        <div className="image-grid">
          <div>
            <img src={fakeImage} alt="Image 1" className="grid-image" />
            <p className='fake'>Fake</p>
          </div>
          <div>
            <img src={realImage} alt="Image 2" className="grid-image" />
            <p className='original'>Original</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
