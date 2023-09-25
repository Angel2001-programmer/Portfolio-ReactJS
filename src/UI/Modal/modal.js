import styles from "./modal.module.css"
import gh_Logo from "../../images/GitHub_Logo.png"

const Modal = props => {
    return(
            <div className={styles.Column}>
            <div className={styles.containerLeft}>
            <iframe 
            className={styles.projectVideo} 
            src="https://www.youtube.com/embed/IJYCDfVfIYM?si=Z6WdMZHP6asyOaWu" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
            <div className={styles.containerRight}>
                <h1 className={styles.projectTitle}>Project Title</h1>
                <sub className={styles.projectInfo}>Project Description</sub>
                <div className={styles.Repo}>
                <h2 className={styles.projectRepo}>Find Project Repo Here</h2><a target="_blank" href="https://github.com/Angel2001-programmer/MG-Music"><img className={styles.gh_Logo} src={gh_Logo} alt="Click here to get to Github Repo"/></a>
                </div>
            </div>
            </div>
    )
}

export default Modal;