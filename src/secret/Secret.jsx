import '../Global.css';
import './Secret.css';

function Secret() {
    return (
        <div className='d-flex flex-column justify-content-center full-screen-slide secret-page'>
            <div>
                <h2 className='text-center primary-yellow'>Hai trovato un segreto!</h2>
            </div>

            <div>
                <h4 className='text-center primary-yellow'>Complimenti!</h4>
            </div>
        </div>
    );
}

export default Secret;