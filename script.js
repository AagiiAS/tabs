longDesc = document.querySelector(".long-desc");
historyBtn = document.querySelector("#history");
visionBtn = document.querySelector("#vision");
// console.log(visionBtn);

goalsBtn = document.querySelector("#goals");
// console.log(longDesc);

const tabs = [
  {
    id: 1,
    header: "History",
    para: "Zara's history began in Spain in 1975 with Amancio Ortega, pioneering fast fashion by quickly moving runway trends to stores at affordable prices through integrated design, manufacturing, and quick supply chains. Its core vision is to democratize fashion, bringing style to everyone via unique designs, fast replenishment",
  },
  {
    id: 2,
    header: "Vision",
    para: "To lead the fashion market by continuously innovating to meet customer desires for new, quality designs at accessible prices, blending high fashion with everyday wear.",
  },
  {
    id: 3,
    header: "Goals",
    para: "Fast Fashion & Customer Focus: Quickly translate trends from catwalk to store (weeks) using vertical integration, flexible production, and low inventory to create scarcity and choice.Commit to reducing environmental impact through circular services (repairs, resale), preferred materials, water reduction, and achieving net-zero emissions by 2040. ",
  },
];

const createDesc = (tab) => {
  return ` <h4>${tab.header}</h4>
            <p>
             ${tab.para}
            </p>`;
};

const render = (tabs) => {
  let textHtml = [];

  tabs.forEach((tab) => {
    const tabItem = createDesc(tab);
    textHtml += tabItem;
  });
  longDesc.innerHTML = textHtml;
  console.log(textHtml);
};
// render(tabs);

const removeActive = () => {
  historyBtn.classList.remove("active");
  visionBtn.classList.remove("active");
  goalsBtn.classList.remove("active");
};

const filterBtn = (currentBtn) => {
  let currentTab = [];
  removeActive();
  if (currentBtn === "history") {
    currentTab = tabs.filter((tab) => tab.header === "History");
    historyBtn.classList.add("active");
  } else if (currentBtn === "vision") {
    currentTab = tabs.filter((tab) => tab.header === "Vision");
    visionBtn.classList.add("active");
  } else if (currentBtn === "goals") {
    currentTab = tabs.filter((tab) => tab.header === "Goals");
    goalsBtn.classList.add("active");
  }
  render(currentTab);
};
filterBtn("history");
historyBtn.onclick = () => filterBtn("history");
visionBtn.onclick = () => filterBtn("vision");
goalsBtn.onclick = () => filterBtn("goals");
