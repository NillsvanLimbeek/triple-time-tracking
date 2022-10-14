import { Component, createSignal, For } from "solid-js";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

const App: Component = () => {
  const [todos, setTodos] = createSignal<string[]>([]);

  function addTodo(todo: string) {
    setTodos([...todos(), todo]);
  }

  return (
    <div class="container mx-auto flex justify-center items-center flex-col">
      <CreateTodo addTodo={(newTodo) => addTodo(newTodo)} />

      <For each={todos()} fallback={<p>Nothing here...</p>}>
        {(todo) => <Todo todo={todo} />}
      </For>
    </div>
  );
};

export default App;
