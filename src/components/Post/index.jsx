import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarURL="https://github.com/lubnimorais.png" name="Lubni Morais" />

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

          <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>

          <p>
            <a href='#'>#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

export { Post }