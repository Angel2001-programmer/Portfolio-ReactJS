import React from "react";
import Card from "../../UI/Card/card";
import styles from "../Tools/tools.module.css"

const Tools = props => {
  return (
    <div className={styles.coursesContent}>
      {props.tools.map((tool) => (
          <Card key={tool.id}>
            <div className={styles.Cardcontainer}>
            <div className={styles.techCard}>
            <img className={styles.techImg} src={tool.image} alt="a tool a used in personal projects or at work."></img>
            </div>
            <div className={styles.textCard}>
            <h1>{tool.name}</h1>
            </div>
        </div>
          </Card>
      ))}
    </div>
  );
};
export default Tools;
