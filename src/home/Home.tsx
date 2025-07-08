import React from "react";
import ReactPageScroller from "react-page-scroller";
import {useMediaQuery} from "react-responsive";
import FirstHomeSlide from "./FirstHomeSlide";
import {SecondHomeSlideDesktop, SecondHomeSlideMobile} from "./SecondHomeSlide";
import ThirdHomeSlide from "./third-home-slide/ThirdHomeSlide";
import "../Global.css";

function Home() {
    interface LayoutProps {
        readonly children: React.ReactNode
    }

    const Mobile = (props: LayoutProps) => {
        const isMobile = useMediaQuery({maxWidth: 767})
        return isMobile ? props.children : null
    }

    const TabletLaptop = (props: LayoutProps) => {
        const isTablet = useMediaQuery({minWidth: 768})
        return isTablet ? props.children : null
    }

    return (
        <>
            <TabletLaptop>
                <ReactPageScroller>
                    <FirstHomeSlide/>
                    <SecondHomeSlideDesktop/>
                    <ThirdHomeSlide/>
                </ReactPageScroller>
            </TabletLaptop>

            <Mobile>
                <FirstHomeSlide/>
                <SecondHomeSlideMobile/>
                <ThirdHomeSlide/>
            </Mobile>
        </>
    );
}

export default Home;