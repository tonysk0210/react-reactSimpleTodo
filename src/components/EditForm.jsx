import { useState } from "react";

function EditForm({ todo, updateTodo }) {
  // content 代表用戶輸入修改後的內容，初始值為當前待辦事項的 content 屬性值。
  const [content, setContent] = useState(todo.content);

  // 建立一個 handleSubmit 函數，當用戶提交表單時觸發，該函數會調用 updateTodo 函數來更新待辦事項的內容。
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, content); // 呼叫 updateTodo 函數，並傳遞當前待辦事項的 ID 和修改後的內容，回到 TodoWrapper 組件中更新 todos 狀態，從而觸發組件重新渲染，更新 UI。
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入編輯事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}
export default EditForm;
