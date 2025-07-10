import {useTranslation} from "react-i18next";
import FlashwordProject from "./FlashwordProject";
import GestionaleProject from "./GestionaleProject";
import FantaNenBunProject from "./FantaNenBunProject";
import KeepSmilingProject from "./KeepSmilingProject";
import "./ThirdHomeSlide.css";

function ThirdHomeSlide() {
    const {t} = useTranslation();

    return (
        <div className="third-home-slide primary-yellow">
            <h1>{t("projects.title")}</h1>
            <h5 className="mb-5">{t("projects.subtitle")}</h5>

            <FlashwordProject/>
            <GestionaleProject/>
            <FantaNenBunProject/>
            <KeepSmilingProject/>
        </div>
    );
}

export default ThirdHomeSlide;