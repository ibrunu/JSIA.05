let tarefas = [];

function adicionarTarefa() {
    let tarefa = document.getElementById("tarefaInput").value;

    if (tarefa.trim() !== "") {
        tarefas.push(tarefa);
        document.getElementById("tarefaInput").value = "";
        listarTarefas();
    } else {
        alert("Digite uma tarefa válida!");
    }
}

function listarTarefas() {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let item = document.createElement("li");
        item.textContent = (i + 1) + " - " + tarefas[i];
        lista.appendChild(item);
    }
}

function removerTarefa() {
    let indice = prompt("Digite o número da tarefa para remover:");
    
    if (indice !== null) {

        let indiceAjustado = parseInt(indice) - 1;
        
        if (!isNaN(indiceAjustado) && indiceAjustado >= 0 && indiceAjustado < tarefas.length) {
            tarefas.splice(indiceAjustado, 1);
            listarTarefas();
        } else {
            alert("Número inválido!");
        }
    }
}

function concluirTarefa() {
    let indice = prompt("Digite o número da tarefa para concluir:");
    
    if (indice !== null) {
        let indiceAjustado = parseInt(indice) - 1;
        
        if (!isNaN(indiceAjustado) && indiceAjustado >= 0 && indiceAjustado < tarefas.length) {
            if (!tarefas[indiceAjustado].startsWith("✅ ")) {
                tarefas[indiceAjustado] = "✅ " + tarefas[indiceAjustado];
            }
            listarTarefas();
        } else {
            alert("Número inválido!");
        }
    }
}