import styles from './styles.module.css';

import iginiteLogo from '../../assets/ignite-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={iginiteLogo} alt="Logotipo do Ignite" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  )

}

export { Header }