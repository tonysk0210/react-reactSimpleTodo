import "./App.css"; // 這是全局樣式，可以在這裡引入其他 CSS 文件
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return <TodoWrapper />; // App 是整個應用的根組件，負責渲染 TodoWrapper 組件。
}

export default App;
