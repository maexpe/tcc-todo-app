import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tarefas"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <main>
      <h2>Lista de Tarefas</h2>
      <h5>
        <ul>
          <li>Descreva a tarefa e pressione + ou <code>Enter</code> para confirmar.</li>
          <li>
            Pressione □ na tarefa para marcá-la como concluída ou pendente.
          </li>
          <li>
            Selecione o texto da tarefa para editá-la e pressione <code>Enter</code> para
            confirmar.
          </li>
          <li>Pressione 🗑 para remover a tarefa.</li>
          <br />
          <li>Tarefas são salvas na memória local do dispositivo como <code>tarefas.json</code>.</li>
        </ul>
      </h5>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onRename={(newName) => renameTask(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default App;
