import ReactPageScroller from 'react-page-scroller';
import FirstHomeSlide from './FirstHomeSlide';
import SecondHomeSlide from './SecondHomeSlide';
import '../Global.css';

function Home() {
  return (
    <ReactPageScroller>
      <FirstHomeSlide />
      <SecondHomeSlide />
    </ReactPageScroller>
  );
}

export default Home;