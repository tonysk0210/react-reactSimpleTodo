import { useState } from "react";

function EditForm({ todo, updateTodo }) {
  // content 代表用戶輸入的待辦事項內容，初始值為當前待辦事項的內容。
  const [content, setContent] = useState(todo.content);

  // 建立一個 handleSubmit 函數，當用戶提交表單時觸發，該函數會調用 updateTodo 函數來更新待辦事項的內容。
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, content);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
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
