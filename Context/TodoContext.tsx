import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface TodoInterface {
  id: string;
  text: string;
  done: boolean;
}

interface TodoContextInterface {
  todos: TodoInterface[];
  setTodo: Dispatch<SetStateAction<TodoInterface[]>>;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodo] = useState<TodoInterface[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodoContext = () => useContext(TodoContext);
