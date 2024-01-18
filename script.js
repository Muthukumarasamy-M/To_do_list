document.getElementById("addbtn").addEventListener("click", addTask);

displayTasks();
function addTask() {
  const inputElement = document.getElementById("input");
  const deadlineElement = document.getElementById("inputdate");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const newTask = {
    task: inputElement.value.trim(),
    deadline: deadlineElement.value,
  };

  if (newTask.task !== "") {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }

  inputElement.value = "";
  deadlineElement.value = "";
}

function displayTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const taskDiv = document.createElement("div");
    taskDiv.textContent = task.task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteTask");
    deleteButton.addEventListener("click", () => deleteTask(index));

    const deadlineParagraph = document.createElement("p");
    deadlineParagraph.textContent = `Before: ${task.deadline}`;

    taskContainer.appendChild(taskDiv);
    taskContainer.appendChild(deadlineParagraph);
    taskContainer.appendChild(deleteButton);

    taskListElement.appendChild(taskContainer);
  });
}
function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
