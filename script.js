function chunkString(str, chunkLength) {
  // If the input string is null or undefined, return an empty array
  if (!str) {
    return [];
  }

  // Initialize an empty array to hold the chunks
  const chunks = [];

  // Use a for loop to create chunks of the given length
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.substring(i, i + chunkLength));
  }

  return chunks;
}

// Examples
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2)); // ["12", "34", "5"]
console.log(chunkString("abc", 5)); // ["abc"]
