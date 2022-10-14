import { Component } from "solid-js";

interface Props {
  todo: string;
}

export const Todo: Component<Props> = ({ todo }) => {
  return <h1>{todo}</h1>;
};
