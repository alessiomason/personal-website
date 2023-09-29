import ReactPageScroller from 'react-page-scroller';
import { useMediaQuery } from 'react-responsive';
import FirstHomeSlide from './FirstHomeSlide';
import { SecondHomeSlideDesktop, SecondHomeSlideMobile } from './SecondHomeSlide';
import '../Global.css';

function Home() {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const TabletLaptop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768 })
    return isTablet ? children : null
  }

  return (
    <>
      <TabletLaptop>
        <ReactPageScroller>
          <FirstHomeSlide />
          <SecondHomeSlideDesktop />
        </ReactPageScroller>
      </TabletLaptop>

      <Mobile>
        <FirstHomeSlide />
        <SecondHomeSlideMobile />
      </Mobile>
    </>
  );
}

export default Home;