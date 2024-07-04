import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="add">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="Digite sua tarefa..."
      />
    </form>
  );
}
