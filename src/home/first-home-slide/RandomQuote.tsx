import {useMediaQuery} from "react-responsive";
import {quotes} from "./Quotes";
import "./RandomQuote.css";

function RandomQuote() {
    const isMobile = useMediaQuery({maxWidth: 767});

    const lastShown = parseInt(sessionStorage.getItem("lastQuoteShown") ?? "-1");
    let randomIndex = lastShown === -1 ? 0 : Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    while ((isMobile && randomQuote.quote.length > 180) || randomIndex === lastShown) {
        randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex];
    }
    sessionStorage.setItem("lastQuoteShown", randomIndex.toString());

    return (
        <div className="random-quote">
            <h5 className="quote primary-yellow">{randomQuote.quote}</h5>
            <p className="quoting primary-yellow">- {randomQuote.quoting}</p>
        </div>
    );
}

export default RandomQuote;