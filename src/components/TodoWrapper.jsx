import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

// TodoWrapper 是整個待辦事項應用的主要組件
function TodoWrapper() {
  // 建立一個名為 todos 的狀態，初始值是一個包含兩個待辦事項的數組。
  // 每個待辦事項是一個對象，包含 content、id、isCompleted 和 isEditing 4個屬性。
  const [todos, setTodos] = useState([
    {
      content: "打掃廁所",
      id: crypto.randomUUID(), // 使用 crypto.randomUUID() 生成唯一的 ID。
      isCompleted: false, // isCompleted 屬性表示待辦事項是否完成，初始值為 false。
      isEditing: false,
    },
    {
      content: "寫作業",
      id: crypto.randomUUID(),
      isCompleted: true,
      isEditing: false,
    },
  ]);

  // 函數 addTodo 用於添加新的待辦事項，接受 content 作為參數，並將新的待辦事項添加到 todos 狀態中。
  const addTodo = (content) => {
    setTodos([
      ...todos, // shallow copy 現有的 todos 狀態，然後添加新的待辦事項對象。
      {
        content,
        id: crypto.randomUUID(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  // 函數 deleteTodo 用於刪除待辦事項，接受 id 作為參數，只保留那些 ID 不匹配的待辦事項，從而實現刪除功能。
  // setTodos 函數會更新 todos 狀態，過濾掉 ID 匹配的待辦事項，從而刪除該待辦事項，進而觸發組件重新渲染，更新 UI。
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      }),
    );
  };

  // 函數 toggleCompleted 用於切換待辦事項的完成狀態，接受 id 作為參數，通過 map 函數遍歷 todos 狀態，
  // 找到匹配 ID 的待辦事項，並切換其 isCompleted 屬性的值。
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted } // ...todo 是對原有待辦事項對象的淺拷貝，保持原有屬性不變，但切換 isCompleted 的值。
          : todo;
        // 如果 ID 匹配，則創建一個新的待辦事項對象，保持原有屬性不變，但切換 isCompleted 的值；
        // 如果 ID 不匹配，則返回原有的待辦事項對象。
      }),
    );
  };

  // 函數 toggleIsEditing 用於切換待辦事項的編輯狀態，接受 id 作為參數，通過 map 函數遍歷 todos 狀態，
  // 找到匹配 ID 的待辦事項，並切換其 isEditing 屬性的值。
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      }),
    );
  };

  // 函數 updateTodo 用於更新待辦事項的內容，接受 id 和 newContent 作為參數，通過 map 函數遍歷 todos 狀態，
  // 找到匹配 ID 的待辦事項，並更新其 content 屬性的值，同時將 isEditing 屬性設置為 false，以結束編輯狀態。
  const updateTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      }),
    );
  };

  // 在 JSX 中渲染待辦事項列表，並傳遞相應的函數作為 props 給 Todo 組件。
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      {/* 加入CreateForm component。把 addTodo 函數作為 props 傳遞給它 */}
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          // Todo component 負責渲染單個待辦事項，並提供編輯、刪除和切換完成狀態的功能。
          // 將 deleteTodo、toggleCompleted、toggleIsEditing 和 editTodo 函數作為 props 傳遞給 Todo 組件，
          // 以便在 Todo 組件中使用這些函數來操作待辦事項的狀態。
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoWrapper;
