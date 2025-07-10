import {useTranslation} from "react-i18next";
import FlashwordProject from "./FlashwordProject";
import GestionaleProject from "./GestionaleProject";
import "./ThirdHomeSlide.css";

function ThirdHomeSlide() {
    const {t} = useTranslation();

    return (
        <div className="third-home-slide primary-yellow">
            <h1>{t("projects.title")}</h1>
            <h5>{t("projects.subtitle")}</h5>
            <FlashwordProject/>
            <GestionaleProject/>
        </div>
    );
}

export default ThirdHomeSlide;