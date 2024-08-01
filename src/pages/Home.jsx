import { useEffect } from 'react'
import Footer from "../layouts/Footer"
import globe from 'vanta/src/vanta.globe'
import styles from './Home.module.css'
import About from './About'
import CounterUp from '../components/CounterUp'

const Home = () => {

  useEffect(() => {
    globe({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 90.00,
      minWidth: 90.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x273ce8,
      backgroundColor: 0x190f29
    })
  }, [])

  return (
    <main>
      <div className={styles.home_container}>
        <div className={styles.bg} id='vanta'></div>
        <div className={styles.home_content}>
          <div className={styles.hero_title}>
            <h1>MLSC <span>VCET</span></h1>
            <p>for the love of coding and innovation</p>
          </div>
        </div>
      </div>
      <About />
      <section className={styles.sections}>
        <div className={styles.section}>
          <h2>Dev</h2>
          <div className={styles.section_content}>
            <div className={styles.option}>
              <h3>AI/ML</h3>
              <p>Explore the future of technology with AI and Machine Learning. Get hands-on experience with real-world projects and learn from industry experts.</p>
            </div>
            <div className={styles.option}>
              <h3>Web Development</h3>
              <p>Build the web applications of tomorrow. Learn modern web technologies and frameworks to create responsive, high-performance websites.</p>
            </div>
            <div className={styles.option}>
              <h3>Android Development</h3>
              <p>Develop powerful and user-friendly mobile applications for Android. Master the Android SDK and design engaging mobile experiences.</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Corporate</h2>
          <p>Engage with leading corporations through internships, workshops, and networking events. Enhance your professional skills and make valuable industry connections.</p>
        </div>
        <div className={styles.section}>
          <h2>Outreach</h2>
          <p>Get involved in community-driven projects and initiatives. Contribute to social causes, mentor young coders, and make a positive impact in the tech community.</p>
        </div>
      </section>
      <CounterUp />
      <Footer />
    </main>
  )
}

export default Home
