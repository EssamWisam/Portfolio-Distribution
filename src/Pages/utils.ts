
export function rand(probabilities:any) {
  // Calculate total probability
  let totalProbability = 0;
  for (const key in probabilities) {
    totalProbability += probabilities[key];
  }

  // Generate a random number between 0 and totalProbability
  let randomNum = Math.random() * totalProbability;

  // Iterate through keys and subtract probabilities until randomNum is less than or equal to 0
  for (const key in probabilities) {
    randomNum -= probabilities[key];
    if (randomNum <= 0) {
      if (key === "false") {
        return false;
      }
      if (key === "true") {
        return true;
      }
      return key;
    }
  }
  return Object.keys(probabilities)[0];

}

export function formatText(quote: string) {
    // Use regular expression to find text within square brackets
    const regex = /\[(.*?)\]/g;
    // Replace the matched text with HTML structure
    const formattedText = quote.replace(
      regex,
      '<span class="colorful-text">$1</span>'
    );
    return formattedText;
  }