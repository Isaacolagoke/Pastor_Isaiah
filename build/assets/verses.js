const verseElement = document.getElementById("bible-verse");
const verses = [
"Luke 4:18-19",
  "John 3:16",
  "Psalm 23:1",
  "Romans 8:28",
  "Matthew 5:14-16",
  "Isaiah 41:10"
]; // Add more references as needed

// Fetch a random Bible verse
async function fetchRandomVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  const verseReference = verses[randomIndex];
  const apiUrl = `https://bible-api.com/${encodeURIComponent(verseReference)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch verse");
    }
    const data = await response.json();
    return `${data.text.trim()} - ${data.reference}`;
  } catch (error) {
    console.error("Error fetching verse:", error);
    return "Error fetching verse. Please try again later.";
  }
}

// Update the displayed verse
async function updateVerse() {
  // Fade out
  verseElement.style.opacity = "0";
  const newVerse = await fetchRandomVerse();
  setTimeout(() => {
    verseElement.textContent = newVerse;
    // Fade in
    verseElement.style.opacity = "1";
  }, 1000); // Wait for fade-out transition to complete
}

// Automatically update verse every 3 seconds
setInterval(updateVerse, 5000);

// Initial verse load
updateVerse();