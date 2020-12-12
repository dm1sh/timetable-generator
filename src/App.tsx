import React from "react";
import styles from "./styles/App.module.css";
import { createDocument } from "./utils/pdf";

const App: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello, world</h1>
      <button onClick={() => createDocument(11, 18)}>Create</button>
    </div>
  );
};

export default App;
