import React from "react";
import {useMediaQuery} from "react-responsive";
import FirstHomeSlide from "./first-home-slide/FirstHomeSlide";
import {SecondHomeSlideDesktop, SecondHomeSlideMobile} from "./second-home-slide/SecondHomeSlide";
import "../Global.css";
import ThirdHomeSlide from "./third-home-slide/ThirdHomeSlide";

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
                <FirstHomeSlide/>
                <hr></hr>
                <SecondHomeSlideDesktop/>
                <hr></hr>
                <ThirdHomeSlide/>
            </TabletLaptop>

            <Mobile>
                <FirstHomeSlide/>
                <hr></hr>
                <SecondHomeSlideMobile/>
                <hr></hr>
                <ThirdHomeSlide/>
            </Mobile>
        </>
    );
}

export default Home;