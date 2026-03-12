const allCards = document.getElementById("All-cards");

const totalCountPart = document.getElementById("totalCount");
const interviewCountPart = document.getElementById("interviewCount");
const rejectedCountPart = document.getElementById("rejectedCount");

function calculateCount() {
  totalCountPart.innerText = allCards.children.length;
}
calculateCount();
