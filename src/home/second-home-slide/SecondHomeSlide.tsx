import {useState} from "react";
import {Row, Col, Carousel} from "react-bootstrap";
import {WhoAmIDesktop, WhoAmIMobile} from "./WhoAmI";
import InterestsBox from "./InterestsBox";
import WorksBox from "./WorksBox";
import AcrossTheWeb from "./AcrossTheWeb";
import GitHubStats from "./GitHubStats";
import {ArrowLeftCircleFill, ArrowRightCircleFill} from "react-bootstrap-icons";
import "./SecondHomeSlide.css";

function SecondHomeSlideDesktop() {
    return (
        <div className="second-home-slide primary-yellow">
            <div className="projects-slide">
                <WhoAmIDesktop/>

                <Row>
                    <InterestsBox/>
                    <WorksBox/>
                </Row>

                <Row className="mt-4 d-flex align-items-end">
                    <Col>
                        <AcrossTheWeb/>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <GitHubStats/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

function SecondHomeSlideMobile() {
    const maxSlide = 3;
    const [index, setIndex] = useState(0);

    function handleSelect(selectedIndex: number) {
        setIndex(selectedIndex);
    }

    function handleArrowSelect(prevSlide: boolean) {
        if (prevSlide) {
            setIndex(prevIndex => ((prevIndex - 1 >= 0) ? prevIndex - 1 : 0));
        } else {
            setIndex(prevIndex => ((prevIndex + 1 < maxSlide) ? prevIndex + 1 : maxSlide));
        }
    }

    return (
        <div className="second-home-slide primary-yellow">
            <>&nbsp;</>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false} indicators={false}
                          controls={false}>
                    <Carousel.Item><WhoAmIMobile/></Carousel.Item>
                    <Carousel.Item><InterestsBox/></Carousel.Item>
                    <Carousel.Item><WorksBox/></Carousel.Item>
                </Carousel>
                <Row>
                    <Col className="d-flex justify-content-end align-items-center">
                        <ArrowLeftCircleFill className={"carousel-arrow" + (index === 0 ? " grayed-out" : "")}
                                             onClick={() => handleArrowSelect(true)}/>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <ArrowRightCircleFill
                            className={"carousel-arrow" + (index === maxSlide - 1 ? " grayed-out" : "")}
                            onClick={() => handleArrowSelect(false)}/>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col className="d-flex justify-content-center text-center">
                    <AcrossTheWeb/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <GitHubStats/>
                </Col>
            </Row>
        </div>
    );
}

export {SecondHomeSlideDesktop, SecondHomeSlideMobile};