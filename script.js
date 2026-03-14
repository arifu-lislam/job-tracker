let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// step-1
const allCards = document.getElementById("All-cards");

// step-2
const totalCountPart = document.getElementById("totalCount");
const interviewCountPart = document.getElementById("interviewCount");
const rejectedCountPart = document.getElementById("rejectedCount");
const filterSection = document.getElementById("filtered");
const mainContainer = document.getElementById("main");

// interviewList.push({ name: 1 }, { name: 1 }, { name: 1 });

// step-3
function calculateCount() {
  totalCountPart.innerText = allCards.children.length;
  interviewCountPart.innerText = interviewList.length;
  rejectedCountPart.innerText = rejectedList.length;
}
calculateCount();

// step-4 ( button togoling)
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
  currentStatus = id;
  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-blue-500", "text-white");

  if (id == "interview-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "All-filter-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

// step-5(using event deligation create an object for all information gatharing  and push the object within an array )

mainContainer.addEventListener("click", function (event) {
  // console.log(event.target.classList.contains("interview-btn"));
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyPart = parentNode.querySelector(".companyName").innerText;
    const positionPart = parentNode.querySelector(".position").innerText;
    const locationTypeSalaryPart = parentNode.querySelector(
      ".locationTypeSalary",
    ).innerText;
    const flowChangePart = parentNode.querySelector(".flowChange").innerText;
    const descriptionPart = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".flowChange").innerText = "interview";

    const objectInfo = {
      companyPart,
      positionPart,
      locationTypeSalaryPart,
      flowChangePart: "interview",
      descriptionPart,
    };

    // console.log(objectInfo);

    // step-6 (object push within array and check validation)
    const validation = interviewList.find(
      (item) => item.companyPart == objectInfo.companyPart,
    );
    if (!validation) {
      interviewList.push(objectInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyPart != objectInfo.companyPart,
    );
    calculateCount();
    // console.log(interviewList);
    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyPart = parentNode.querySelector(".companyName").innerText;
    const positionPart = parentNode.querySelector(".position").innerText;
    const locationTypeSalaryPart = parentNode.querySelector(
      ".locationTypeSalary",
    ).innerText;
    const flowChangePart = parentNode.querySelector(".flowChange").innerText;
    const descriptionPart = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".flowChange").innerText = "rejected";

    const objectInfo = {
      companyPart,
      positionPart,
      locationTypeSalaryPart,
      flowChangePart: "rejected",
      descriptionPart,
    };

    // console.log(objectInfo);

    // step-6 (object push within array and check validation)
    const validation = rejectedList.find(
      (item) => item.companyPart == objectInfo.companyPart,
    );
    if (!validation) {
      rejectedList.push(objectInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyPart != objectInfo.companyPart,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }
    calculateCount();
    // console.log(interviewList);
  }
});

function renderInterview() {
  filterSection.innerHTML = "";
  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "bg-white p-7 flex justify-between mb-5";
    div.innerHTML = `
    
            <div class="space-y-4">
                <h3 class=" companyName text-2xl font-bold">${interview.companyPart}</h3>
            <p class="position text-gray-500">${interview.positionPart}</p>
            <p class=" locationTypeSalary text-gray-500">${interview.locationTypeSalaryPart}</p>
 <p class="flowChange bg-sky-100 w-[120px] px-4 py-2 ">Not Applied</p>
 <p class="description text-gray-700">${interview.descriptionPart}</p>
 <div>
    <button class="interview-btn border-2 border-green-400 px-4 py-2 rounded-[5px] text-green-500">Interview</button>
    <button class="rejected-btn border-2 border-red-400 px-4 py-2 rounded-[5px] text-red-500">Rejected</button>
 </div>
            </div>
            
            <div><i class="fa-regular fa-trash-can"></i></div>

   `;
    filterSection.appendChild(div);
  }
}
function renderRejected() {
  filterSection.innerHTML = "";
  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "bg-white p-7 flex justify-between mb-5";
    div.innerHTML = `
    
            <div class="space-y-4">
                <h3 class=" companyName text-2xl font-bold">${rejected.companyPart}</h3>
            <p class="position text-gray-500">${rejected.positionPart}</p>
            <p class=" locationTypeSalary text-gray-500">${rejected.locationTypeSalaryPart}</p>
 <p class="flowChange bg-sky-100 w-[120px] px-4 py-2 ">Not Applied</p>
 <p class="description text-gray-700">${rejected.descriptionPart}</p>
 <div>
    <button class="interview-btn border-2 border-green-400 px-4 py-2 rounded-[5px] text-green-500">Interview</button>
    <button class="rejected-btn border-2 border-red-400 px-4 py-2 rounded-[5px] text-red-500">Rejected</button>
 </div>
            </div>
            
            <div><i class="fa-regular fa-trash-can"></i></div>

   `;
    filterSection.appendChild(div);
  }
}
