"use strict";

const quotes = [
    "Only you can slow you down turn your dreams into commitments.",
    "All our dreams can come true if we have the courage to pursue them.",
    "You can never lose if you learn",
    "Being negative only makes a difficult journey more difficult. You may be given a cactus, but you dont have to sit on it.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "One way to keep momentum going is to have constantly greater goals.",
    "Never give up, for that is just the place and time that the tide will turn.",
    "Thinks good thoughts, speak good words, take good actions, because thats what the world deserves."
];

const getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = getQuote;