import React from "react";
import styles from "./styles/App.module.css";

const App: React.FC = () => {
  console.log("test");
  return (
    <div>
      <h1 className={styles.title}>Hello, world</h1>
    </div>
  );
};

export default App;
