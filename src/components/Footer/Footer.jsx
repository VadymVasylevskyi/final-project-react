
import styles from './Footer.module.css';
import style from '../../App.module.css';

import Instagram from '../../assets/svg/instagram.svg?react';
import Whatsapp from '../../assets/svg/whatsapp.svg?react'


export default function Footer() {
  return (
    <>
    <footer className={style.container}>
      <div className={style.titleBlock}>
        <h2>Contact</h2>
      </div>
        
        <div className={styles.footerCards}>
          <div className={styles.phone}>
              <div className={styles.card}>
                <span className={styles.footerTitle}>Phone</span>
                <span className={styles.footerContent}>+49 30 915-88492</span>
              </div>
            </div>
            <div className={styles.adress}>
              <div className={styles.card}>
                <span className={styles.footerTitle}>Address</span>
                <span className={styles.footerContent}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</span>
              </div>
            </div>
            <div className={styles.socCard}>
              <div className={styles.card}>
                <p className={styles.footerTitle}>Socials</p>
                <div className={styles.socials}>
                  <Instagram />
                  <Whatsapp />
                </div>
              </div>    
            </div>
            <div className={styles.work}>
              <div className={styles.card}>
                <p className={styles.footerTitle}>Working Hours</p>
                <p className={styles.footerContent}>24 hours a day</p>
              </div>
            </div>
            
          </div>
          <div className={styles.mapContainer}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.826268337366!2d13.414859276739949!3d52.51314577981495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e56fa34a65%3A0x80b6a3f172a2270b!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1622039898429!5m2!1sen!2sus&zoom=15&disableDefaultUI=true&scrollwheel=false"
          ></iframe>
            </div>
          
          
    </footer>
    </>
  )
}
