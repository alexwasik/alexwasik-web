import styles from '../styles/base.module.css';

const FooterComponent = () => {
  return (
    <>
      <div className={styles.contentCenter}>
        &copy; Alex Wasik {new Date().getFullYear()}
      </div>
    </>
  )
}

export default FooterComponent;
