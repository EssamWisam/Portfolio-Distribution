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