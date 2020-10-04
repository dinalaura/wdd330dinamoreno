const links = [{
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  }
]

const myList = document.querySelector("ol");

links.forEach(links => {
  let item = document.createElement("li");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", links.url);
  anchor.innerText = links.label;
  
  item.appendChild(anchor);
  myList.appendChild(item); 
});