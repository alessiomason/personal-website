import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageLayout from './PageLayout';
import Home from './home/Home';
import Maintenance from './maintenance/Maintenance';
import Secret from './secret/Secret';
import Flashword from "./apps/flashword/Flashword";
import FlashwordPrivacyPolicy from "./apps/flashword/FlashwordPrivacyPolicy";
import FlashwordTermsOfUse from "./apps/flashword/FlashwordTermsOfUse";
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <Router>
            <App2/>
        </Router>
    );
}

function App2() {
    return (
        <Routes>
            <Route path='/' element={<PageLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='secret' element={<Secret/>}/>

                <Route path='apps/flashword' element={<Flashword/>}/>
                <Route path='apps/flashword/privacy-policy' element={<FlashwordPrivacyPolicy/>}/>
                <Route path='apps/flashword/terms-of-use' element={<FlashwordTermsOfUse/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;