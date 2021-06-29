import './App.css';
import VideoCard from './VideoCard';
import video_1 from "./Videos/video_1.mp4";

function App() {
  return (
    <div className="app">
      <div className = "app__top">
        <img 
          className = "app__logo"
          src = "https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg"
          alt = ""
        />
        {/* Reels text */}
        <h1>Reels</h1>
      </div>

      <div className = "app__videos"> 
        {/* Container of app__videos (scrollable container) */}
        <VideoCard 
          channel = "justice777"
          avatarSrc = 'https://i.pinimg.com/originals/1a/c0/42/1ac04253466c4c1682700cd38e9594d1.jpg'
          song = "test song --- awesome song"
          url = {video_1}
          likes = {777}
          shares = {70}
        />
      </div>      
    </div>
  );
}

export default App;
