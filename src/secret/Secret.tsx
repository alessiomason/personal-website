import {useTranslation} from "react-i18next";
import '../Global.css';
import './Secret.css';

function Secret() {
    const {t} = useTranslation();

    return (
        <div className='d-flex flex-column justify-content-center full-screen-slide secret-page'>
            <div>
                <h2 className='text-center primary-yellow'>{t("secret.title")}</h2>
            </div>

            <div>
                <h4 className='text-center primary-yellow'>{t("secret.description")}</h4>
            </div>
        </div>
    );
}

export default Secret;