import { useState } from "react";

import { useTranslation } from "react-i18next";

interface Todo {
  id: number;
  text: string;
}

export const useData = () => {
  const { t } = useTranslation();

  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputText, setInputText] = useState("");

  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const [editingText, setEditingText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);

    if (todoToEdit) {
      setEditingTodoId(id);
      setEditingText(todoToEdit.text);
    }
  };

  const handleUpdateTodo = () => {
    if (editingTodoId !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodoId ? { ...todo, text: editingText } : todo
        )
      );
      setEditingTodoId(null);
      setEditingText("");
    }
  };
  return {
    t,
    todos,
    inputText,
    editingTodoId,
    editingText,
    setEditingText,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleUpdateTodo,
  };
};
