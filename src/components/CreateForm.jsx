import { useState } from "react";

// CreateForm 是一個用於創建新待辦事項的表單組件，負責處理用戶輸入和提交事件。
function CreateForm({ addTodo }) {
  const [content, setContent] = useState(""); // content 代表用戶輸入的待辦事項內容。

  // 建立一個 handleSubmit 函數，當用戶提交表單時觸發，該函數會調用 addTodo 函數來添加新的待辦事項，並清空輸入框。
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為，避免頁面刷新。
    addTodo(content);
    setContent(""); // 提交後清空輸入框，讓用戶可以繼續添加新的待辦事項。
  };

  return (
    // 當表單提交時，觸發 handleSubmit 函數。
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value); // 當用戶在輸入框中輸入內容時，更新 content 的狀態。
        }}
      />
      <button type="submit">加入</button>
    </form>
  );
}
export default CreateForm;
