import styles from "./ProsCons.module.css";

export default function ProsCons({ data, color }) {
  return (
    <div className={styles["pros-cons-row"]}>
      {data.map((row, index) => (
        <div className={styles.ProsConsText} key={index}>
          <div className={styles["pros-cons-header"]}>
            {index % 2 === 0 ? "✅ Pros" : "⚠️ Cons"}
          </div>
          <ul className={styles["pros-cons-list"]}>
            {row.map((item, idx) => {
              if (typeof item === "object") {
                return (
                  <li key={idx}>
                    <strong>{item.title}</strong>
                    <ul>
                      {item.items.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return <li key={idx}>{item}</li>;
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
