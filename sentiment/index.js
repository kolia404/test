const natural = require('natural');

function analyzeSentiment(text) {
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");
    const score = analyzer.getSentiment(text.split(' '));
    return score;
}

module.exports = { analyzeSentiment };