import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
    return (
<div className="section quote">
    <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>food is a way to bring people together. It’s a way to show love, to celebrate, and to share experiences. Cooking is not just about preparing meals, When you cook with passion, you’re not just feeding the body but also nourishing the soul.</p>
    <p className="quote-author">– Thomas Keller</p>
</div>
    )
}