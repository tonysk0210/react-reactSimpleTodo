import { MdDelete, MdEdit } from "react-icons/md"; // 從 react-icons 庫中導入 MdDelete 和 MdEdit 圖標， 用於刪除和編輯待辦事項。npm install react-icons
import EditForm from "./EditForm";

// Todo componenet 負責渲染單個待辦事項，並提供編輯、刪除和切換完成狀態的功能。
function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  updateTodo,
}) {
  // 如果 todo 的 isEditing 屬性為 true，則渲染 EditForm 組件，並傳遞當前的 todo 和 updateTodo 函數作為 props。
  // 反之，則渲染待辦事項的內容和操作圖標。
  return todo.isEditing ? (
    <EditForm todo={todo} updateTodo={updateTodo} />
  ) : (
    // 根據 todo 的 isCompleted 屬性來決定是否添加 "completed" 類名，以便應用相應的樣式。
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      {/* 顯示待辦事項的內容，當用戶點擊內容時，調用 toggleCompleted 函數切換完成狀態。 */}
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>

      {/* 圖標 */}
      <div>
        {/* 點擊 MdEdit 圖標時，調用 toggleIsEditing 函數並傳遞當前待辦事項的 ID，以切換編輯狀態。 */}
        <MdEdit
          style={{ cursor: "pointer" }} // 設置鼠標懸停時的樣式，使其看起來像一個可點擊的元素。
          onClick={() => {
            toggleIsEditing(todo.id); // 呼叫 toggleIsEditing 函數，並傳遞當前待辦事項的 ID，以切換編輯狀態。
          }}
        />
        {/* 點擊 MdDelete 圖標時，調用 deleteTodo 函數並傳遞當前待辦事項的 ID，以刪除該待辦事項。 */}
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTodo(todo.id); // 呼叫 deleteTodo 函數，並傳遞當前待辦事項的 ID，以刪除該待辦事項。
          }}
        />
      </div>
    </div>
  );
}
export default Todo;
