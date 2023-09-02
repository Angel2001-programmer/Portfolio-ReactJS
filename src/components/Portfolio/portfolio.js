import Navigation from "../Navigation/navigation"
import HeroImage from "../HeroImage/heroImage";
import Content from "../Content/content";
import Courses from "../Courses/courses";
import Tools from "../Tools/Tools";
import styles from "./portfolio.module.css"

const portfolio = props => {

return(
    <div className="web">
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
            <Courses data={props.projects}></Courses>
          </div>
        </div>
        </Content>
        <form></form>
      </div>
)
}

export default portfolio;