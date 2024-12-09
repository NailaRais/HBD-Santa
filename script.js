// Function to open the next card
function openNextCard(currentCardId, nextCardId) {
    // Hide current card
    const currentCard = document.getElementById(currentCardId);
    currentCard.classList.add("hidden");

    // Show the next card
    const nextCard = document.getElementById(nextCardId);
    nextCard.classList.remove("hidden");
}

// Function to check password for the final reveal
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "PW"; // Set your password here
    const error = document.getElementById("error");
    const finalCard = document.getElementById("finalCard");
    const gift = document.getElementById("gift");

    if (passwordInput === correctPassword) {
        // Hide final card and error message
        finalCard.classList.add("hidden");
        error.classList.add("hidden");

        // Show the gift reveal
        gift.classList.remove("hidden");
    } else {
        // Show error message
        error.classList.remove("hidden");
    }
}
