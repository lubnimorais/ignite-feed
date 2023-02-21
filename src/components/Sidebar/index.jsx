import { PencilLine } from 'phosphor-react';

import styles from './styles.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/lubnimorais.png" alt="Lubni Morais"
        />

        <strong>Lubni Morais</strong>
        <span>Mobile Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />

          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export { Sidebar }