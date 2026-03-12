const interviewList = [];
const rejectedList = [];

// step-1
const allCards = document.getElementById("All-cards");

// step-2
const totalCountPart = document.getElementById("totalCount");
const interviewCountPart = document.getElementById("interviewCount");
const rejectedCountPart = document.getElementById("rejectedCount");

interviewList.push({ name: 1 }, { name: 1 }, { name: 1 });

// step-3
function calculateCount() {
  totalCountPart.innerText = allCards.children.length;
  interviewCountPart.innerText = interviewList.length;
  rejectedCountPart.innerText = rejectedList.length;
}
calculateCount();
