function addTask() {
  let input = document.querySelector(".input");
  if (input.value === "") return;
  let taskList = document.querySelector(".taskList");
  let taskBox = document.createElement("div");
  let tickBox = document.createElement("img");
  let task = document.createElement("div");
  let cross = document.createElement("div");

  taskBox.classList.add("taskBox");
  tickBox.classList.add("tickBox");
  task.classList.add("task");
  cross.classList.add("cross");

  tickBox.setAttribute("src", "images/unchecked.png");
  task.innerText = input.value;
  cross.innerText = "x";

  taskBox.appendChild(tickBox);
  taskBox.appendChild(task);
  taskBox.appendChild(cross);
  taskList.appendChild(taskBox);

  input.value = "";
}

function taskClicked(e) {
  if (e.target.classList.contains("taskBox")) return;
  if (e.target.classList.contains("cross")) {
    e.target.parentElement.remove();
  } else {
    e.target.parentElement.children[0].attributes["src"].value =
      e.target.parentElement.children[0].attributes["src"].value ===
      "images/unchecked.png"
        ? "images/checked.png"
        : "images/unchecked.png";
    if (e.target.parentElement.children[1].classList.contains("checked")) {
      e.target.parentElement.children[1].classList.remove("checked");
    } else {
      e.target.parentElement.children[1].classList.add("checked");
    }
  }
}
