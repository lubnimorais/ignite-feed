import styles from './styles.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/lubnimorais.png" alt="Lubni Morais"
          />

          <div className={styles.authorInfo}>
            <strong>Lubni Morais</strong>
            <span>Mobile Developer</span>
          </div>
        </div>

        <time title='20 de fevereiro às 21:56' dateTime='2023-02-20 21:56:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href='#'>jane.design/doctorcare</a></p>

          <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
        </p>
      </div>
    </article>
  )
}

export { Post }