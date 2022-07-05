import { KeyboardEvent, useEffect, useState } from "react";
import { useTodoContext } from "../Context/TodoContext";
import useLocalStorage from "../hooks/useLocalStotage";

const Content = () => {
  const todo = useTodoContext();
  const [isdone, setDone] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [hidden, sethidden] = useState<boolean>(false);

  const [setValue] = useLocalStorage("todo", {});

  const submitTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      todo?.setTodo([
        {
          id: Math.random().toString(),
          text: text,
          done: false,
        },
        ...todo.todos,
      ]);
      setValue(text);
      setText("");
      sethidden(false);
    }
  };

  const EditTodo = (id: string) => {
    // console.log("todo", todo?.todos.find(id));
  };

  console.log("hidden", hidden);

  return (
    <div className="flex items-center min-h-[calc(100vh-64px)] justify-center">
      <div className="max-w-[600px] space-y-4 w-full text-white">
        <div onClick={() => sethidden(true)}>
          <h3 className="text-gray-400 text-2xl">#work</h3>
        </div>
        {hidden && (
          <input
            onKeyDown={submitTodo}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-input bg-gray-800 text-xl w-full
          border-none rounded-md  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        )}
        {todo?.todos.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <input
              checked={item.done || isdone}
              type={"checkbox"}
              onChange={(e) => setDone(!isdone)}
              className="form-checkbox rounded-md text-gray-500"
            />
            <input
              type="text"
              onChange={() => EditTodo(item.id)}
              className={`bg-gray-800 ${
                isdone && "line-through text-gray-600 "
              }  form-input text-xl w-full
               border-none rounded-md  focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
              value={item.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
