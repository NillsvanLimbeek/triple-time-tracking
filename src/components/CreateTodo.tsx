import { Component, createSignal, createEffect } from "solid-js";

interface Props {
  addTodo: (input: string) => void;
}

type Submit = Event & { submitter: HTMLElement } & {
  currentTarget: HTMLFormElement;
  target: Element;
};

export const CreateTodo: Component<Props> = ({ addTodo }) => {
  const [input, setInput] = createSignal<string>("");
  let inputEl: HTMLInputElement;

  createEffect(() => {
    console.log(input() + "input");
  });

  function handleSubmit(e: Submit) {
    e.preventDefault();

    addTodo(input());
    setInput("");

    inputEl.focus();
  }

  return (
    <form class="p-5" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputEl!}
        type="text"
        class="input input-bordered"
        value={input()}
        onInput={(e) => setInput(e.currentTarget.value)}
        required
      />

      <button type="submit" class="btn">
        Add
      </button>
    </form>
  );
};
