function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Verifica se o campo de entrada não está vazio
    if (taskInput.value.trim() !== "") {
        // Cria um novo elemento de lista
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        // Adiciona um evento de clique para marcar a tarefa como concluída
        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        // Adiciona a tarefa à lista
        taskList.appendChild(li);

        // Limpa o campo de entrada
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida!");
    }
}
