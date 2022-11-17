import styles from './About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
       <h2>Sobre o Adolfo <span>Blog</span></h2>
       <p>Esse projeto consiste em um blog feito com react no front-end e firebase no back-end.</p>
       <Link to="/post/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About