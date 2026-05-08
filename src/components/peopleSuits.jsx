import styles from "./peopleSuits.module.css";

export default function PeopleSuits({ data, color }) {
  return (
    <div
      className={styles.peopleSuitsWrapper}
      style={{
        "--accentColor1": color[0],
        "--accentColor2": color[1] || color[0],
      }}
    >
      {data.map((group, groupindex) => (
        <div className={styles.peopleSuitsGrind} key={groupindex}>
          {group.map((item, index) => (
            <div
              className={`${styles.peopleSuitsBox} ${
                groupindex % 2 === 0 ? styles.SchoolTheme1 : styles.SchoolTheme2
              }`}
              key={index}
            >
              <span className={styles.checkmark}>✓</span>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
