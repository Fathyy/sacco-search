import styles from "./style";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Saccos from "./components/Sacco/Saccos";

function App() {
  return (
    <div className="w-full over">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#f1f4f9] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Saccos />
        </div>
      </div>
    </div>
  );
}

export default App;
