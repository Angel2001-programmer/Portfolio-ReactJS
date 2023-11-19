import styles from "./error.module.css"

const Error = () => {
    return(
        <div className={styles.titleContainer}>
            <h1>Something went wrong :C</h1>
            <button><a href="/Portfolio-ReactJS">Return to home</a></button>
        </div>
    )
}

export default Error;