import HeroImage from "../HeroImage/heroImage";
import Content from "../Content/content";
import Courses from "../Courses/courses";
import Tools from "../Tools/Tools";
import styles from "./portfolio.module.css";
import Modal from "../../UI/Modal/modal"
import Navigation from "../Navigation/navigation"
import { useState } from 'react';

const Portfolio = props => {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [video, setVideo] = useState()
  const [repo, setRepo] = useState()
  const [isModal, setIsModal] = useState()

  let modal = null; 
  if(isModal === true){
    modal = 
    <div className={styles.modalBG}>
      <div className={styles.modal}>
      <Modal className={styles.modal_Column__ALBIj} 
        isClose={setIsModal}
        title={title} 
        description={desc} 
        video={video} 
        repo={repo}/>
      </div>
    </div>
    console.log(title)
  } else {
    modal = null;
  }

return(
    <div className="web">
      {modal}
      <Navigation/>
      <HeroImage></HeroImage>
      <Content>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h1 className={styles.title}>Brief Summary</h1>
          <p className={styles.normalText}>
            A little bit about me, Hi I am Angel Im 22 years old, studying
            ReactJS through Udemy.com. I am also studying a kick-starter course
            provided by Code First Girls about frontend development. I have
            always had a passion for tech since a little kid, computers has
            always fascinated me about how they function, 22 years later and I
            still love computers.
          </p>
          <p className={styles.normalText}>Please explore my Portfolio to find out more about me!</p>
        </div>
        </div>
      </Content>

      <Content>
        <div className={styles.contentV}>
          <div className={styles.courses}>
            <h1 className={styles.title}>Courses</h1>
            <Courses data={props.data}></Courses>
          </div>

          <div className={styles.technologies}>
            <h1 className={styles.title}>Technologies</h1>
            <Tools tools={props.tools}></Tools>
          </div>

          <div className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            <Courses data={props.projects} isModal={setIsModal} onChangeTitle={setTitle} onChangeDesc={setDesc} onChangeVideo={setVideo} onChangeRepo={setRepo}/>
          </div>
        </div>
        </Content>
        <form></form>
      </div>
)
}

export default Portfolio;