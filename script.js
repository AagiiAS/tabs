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
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae accusamus vitae distinctio mollitia nulla? Perspiciatis doloribus impedit sapiente qui voluptatum enim placeat suscipit odit soluta deleniti, omnis accusantium harum architecto temporibus aliquid eum, rerum, nihil ab? Odio maiores provident ex?",
  },
  {
    id: 2,
    header: "Vision",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae accusamus vitae distinctio mollitia nulla? Perspiciatis doloribus impedit sapiente qui voluptatum enim placeat suscipit odit soluta deleniti, omnis accusantium harum architecto temporibus aliquid eum, rerum, nihil ab? Odio maiores provident ex?",
  },
  {
    id: 3,
    header: "Goals",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae accusamus vitae distinctio mollitia nulla? Perspiciatis doloribus impedit sapiente qui voluptatum enim placeat suscipit odit soluta deleniti, omnis accusantium harum architecto temporibus aliquid eum, rerum, nihil ab? Odio maiores provident ex?",
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
