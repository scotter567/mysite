import './styles.css';
import 'leaflet/dist/leaflet.css';
import MePNG from './icons/avi-nobg.png'
import twitchIcon from './icons/twitch.svg'
import twitterIcon from './icons/twitter-x.svg'
import youtubeIcon from './icons/youtube.svg'
function App() {
  return (
    <div className='mainContainer'>
      <div className='aviContainer'>
        <img alt='this is me!' id='avi' src={MePNG}></img>
      </div>
      <div className='iconContainer'>
        <a href='https://twitch.tv/statelyfall'>
          <img alt='twitch icon' className='icon' src={twitchIcon}></img>
        </a>
        <a href='https://x.com/StatelyFall'>
          <img alt='twitter icon' className='icon' src={twitterIcon}></img>
        </a>
        <a href='https://www.youtube.com/@jordanscott5525'>
          <img alt='youtube icon' className='icon' src={youtubeIcon}></img>
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
