import styles from "./modal.module.css"
import gh_Logo from "../../images/GitHub_Logo.png"

const Modal = props => {
    return(
            <div className={styles.Column}>
            <div className={styles.containerLeft}>
            <iframe 
            className={styles.projectVideo} 
            src={props.video} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            </iframe>
            </div>
            <div className={styles.containerRight}>
                <h1 className={styles.closeModal} onClick={() => props.isClose(false)}>X</h1>
                <h1 className={styles.projectTitle}>{props.title}</h1>
                <sub className={styles.projectInfo}>{props.description}</sub>
                <div className={styles.Repo}>
                <h2 className={styles.projectRepo}>Find Project Repo Here</h2><a rel="noreferrer" target="_blank" href={props.repo}><img className={styles.gh_Logo} src={gh_Logo} alt="Click here to get to Github Repo"/></a>
                </div>
            </div>
            </div>
    )
}

export default Modal;