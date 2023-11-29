import { FC } from "react";

import {
  IoIosAdd,
  IoIosClose,
  IoMdCheckmark,
  IoMdCreate,
} from "react-icons/io";

import { useData } from "./useData";

const Todo: FC = () => {
  const data = useData();

  return (
    <div className="card w-full lg:w-3/5 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{data.t("mainLayout.todo.todo list")}</h2>
        <div>
          <div className="card-actions lg:gap-2">
            <input
              type="text"
              value={data.inputText}
              onChange={data.handleInputChange}
              placeholder={data.t("mainLayout.todo.please insert note")}
              className="input input-bordered input-primary w-full lg:w-4/5"
            />
            <button
              className="btn btn-success flex-1 text-2xl"
              onClick={data.handleAddTodo}
            >
              <IoIosAdd />
            </button>
          </div>
          <ul>
            {data.todos.map((todo) => (
              <li
                className="my-2 gap-2 md:flex justify-center items-center rounded-lg bg-blue-100 shadow-lg p-4"
                key={todo.id}
              >
                {data.editingTodoId === todo.id ? (
                  <>
                    <input
                      className="input input-bordered input-primary w-full lg:w-4/5"
                      type="text"
                      value={data.editingText}
                      onChange={(event) =>
                        data.setEditingText(event.target.value)
                      }
                    />
                    <button
                      className="btn btn-primary text-lg md:text-2xl"
                      onClick={data.handleUpdateTodo}
                    >
                      <IoMdCheckmark />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="w-1/2">{todo.text}</span>
                    <button
                      className="btn btn-info text-lg md:text-2xl"
                      onClick={() => data.handleEditTodo(todo.id)}
                    >
                      <IoMdCreate />
                    </button>
                    <button
                      className="btn btn-error text-lg md:text-2xl"
                      onClick={() => data.handleDeleteTodo(todo.id)}
                    >
                      <IoIosClose />
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
