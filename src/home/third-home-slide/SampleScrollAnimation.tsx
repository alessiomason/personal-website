import {useRef} from "react";
import {useScrollProgress} from "../../scrollHooks";
import {Col, Row} from "react-bootstrap";
import KeepSmiling from "../../images/works/KS.png";

function SampleScrollAnimation() {
    const ref = useRef<HTMLImageElement | null>(null);
    const progress = useScrollProgress(ref);
    const rectWidth = ref?.current?.getBoundingClientRect().width ?? 0;

    const windowWidth = window.innerWidth;
    const visiblePx = (1 - progress) * 100;
    const rotateDeg = -(1 - progress) * 20;
    const scale = progress + 1;

    const tranformX = -22 + windowWidth / 2 - rectWidth / 2;

    console.log(scale)

    return (
        <div>
            <h1>I miei progetti</h1>
            <p className="justify-text">Qui alcuni dei miei lavori e progetti personali: alcuni hanno pagine dedicate
                che li raccontano meglio!</p>

            <div className="mb-5">
                <Row>
                    <Col>
                        <img src={KeepSmiling} className="ks-image mt-5" ref={ref} style={{
                            width: "20vw",
                            transform: `translate3d(${tranformX}px, ${0}px, 0) scale(${progress})`,
                            //opacity: progress
                        }}/>
                    </Col>
                    <Col sm={8}>
                        <h2>KeepSmiling</h2>
                        <h4>Un'applicazione</h4>
                        <p>Progress: {progress}</p>
                        <p>Scale: {scale}</p>
                        <p>Rect width: {rectWidth}</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}