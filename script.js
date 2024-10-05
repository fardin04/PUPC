let currentIndex = 0;
const cards = document.querySelectorAll(".carousel-card");

function showNextCard() {
  cards[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add("active");
}

setInterval(showNextCard, 5000); // 5 seconds interval
