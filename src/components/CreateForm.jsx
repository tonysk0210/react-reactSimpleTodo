import { useState } from "react";

// CreateForm component 負責渲染一個表單，讓用戶可以輸入新的待辦事項內容，並在提交表單時調用 addTodo 函數來添加新的待辦事項。
function CreateForm({ addTodo }) {
  const [content, setContent] = useState(""); // content 代表用戶輸入的待辦事項內容。

  // 1. 建立一個 handleSubmit 函數，當用戶提交表單時觸發，該函數會調用 addTodo 函數來添加新的待辦事項，並清空輸入框。
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
        value={content} // input 元素的 value 屬性綁定到 content 狀態，這樣當 content 更新時，輸入框的內容也會更新。
        onChange={(e) => {
          setContent(e.target.value);
          // 當用戶在輸入框中輸入內容時，更新 content 的狀態。 e.target.value 是輸入框中的當前值，通過 setContent 更新 content 狀態，從而實現輸入框的雙向綁定。
        }}
      />
      {/* input 元素用於讓用戶輸入待辦事項內容，當用戶在輸入框中輸入內容時，更新 content 的狀態。 */}
      <button type="submit">加入</button>
      {/* submit 按鈕用於提交表單，當用戶點擊按鈕時，觸發 handleSubmit 函數。 */}
    </form>
  );
}
export default CreateForm;
