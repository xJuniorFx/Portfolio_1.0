import styles from './Card.module.scss'
import gitHub from '../../assets/img/githubP.svg'
import link from '../../assets/img/external-link.svg'


interface CardProps{
    title: string; 
    description: string; 
    linkGit: string;
    linkProject: string;
    imgLink: string;
}

const Card = (props: CardProps)=>{

    const {title, description, linkGit, linkProject, imgLink} = props;

    return(
        
        <article className={styles.project}>
            <div className={styles.project_box}>
                <img className={styles.project_image} src={imgLink} alt={title} />
                <div className={styles.layer}>
                    <div className={styles.project_about}>
                        <h3 className={styles.project_title}>{title}</h3>
                        <p className={styles.project_description}>{description}</p>
                    </div>
                    <div className={styles.link_section}>
                        <a className={styles.link} target="_blank" href={linkGit} rel="noreferrer"><img src={gitHub} alt="Githubb Icon" /></a>
                        <a className={styles.link} target="_blank" href={linkProject} rel="noreferrer"><img src={link} alt='External link'/></a> 
                    </div>                
                </div>
            </div>
        </article>
    
    )
}

export default Card