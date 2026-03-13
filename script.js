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

// step-4
const allFilterBtn = document.getElementById("All-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function clicked(id) {
  console.log(id);
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

  allFilterBtn.classList.add("bg-white", "text-black");
  interviewFilterBtn.classList.add("bg-white", "text-black");
  rejectedFilterBtn.classList.add("bg-white", "text-black");

  let selected = document.getElementById(id);
  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-blue-500", "text-white");
}
