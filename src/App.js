import './styles.css';
import MePNG from './icons/avi-nobg.png'
import twitchIcon from './icons/twitch.svg'
import twitterIcon from './icons/twitter-x.svg'
import youtubeIcon from './icons/youtube.svg'
function App() {
  return (
    <div className='mainContainer'>
      <div className='aviContainer'>
        <img id='avi' src={MePNG}></img>
      </div>
      <div className='iconContainer'>
        <a href='https://twitch.tv/statelyfall'>
          <img className='icon' src={twitchIcon}></img>
        </a>
        <a href='https://x.com/StatelyFall'>
          <img className='icon' src={twitterIcon}></img>
        </a>
        <a href='https://www.youtube.com/@jordanscott5525'>
          <img className='icon' src={youtubeIcon}></img>
        </a>
      </div>
      <div className='linkContainer'>
        <a href="/travel">
          <div className='link'>
            Travel Updates
          </div>
        </a>
        <div className='link'>
          Link 1
        </div>
        <div className='link'>
          Link 1
        </div>
      </div>
    </div>
  );
}

export default App;
