import React from "react";
import ReactPageScroller from "react-page-scroller";
import {useMediaQuery} from "react-responsive";
import FirstHomeSlide from "./FirstHomeSlide";
import {SecondHomeSlideDesktop, SecondHomeSlideMobile} from "./SecondHomeSlide";
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
                </ReactPageScroller>
            </TabletLaptop>

            <Mobile>
                <FirstHomeSlide/>
                <SecondHomeSlideMobile/>
            </Mobile>
        </>
    );
}

export default Home;