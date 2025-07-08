import {quotes} from "./Quotes";
import "./RandomQuote.css";

function RandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return (
        <div className="random-quote">
            <h5 className="quote primary-yellow">{randomQuote.quote}</h5>
            <p className="quoting primary-yellow">- {randomQuote.quoting}</p>
        </div>
    );
}

export default RandomQuote;