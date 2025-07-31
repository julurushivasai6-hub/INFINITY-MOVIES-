function searchMovies() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach(card => {
    const title = card.querySelector("h2").innerText.toLowerCase();
    const actorList = card.getAttribute("data-actors") || "";

    if (title.includes(input) || actorList.toLowerCase().includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}