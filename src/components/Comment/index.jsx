import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'

import styles from './styles.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar
        avatarURL="https://github.com/lubnimorais.png"
        name="Lubni Morais"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lubni Morais</strong>

              <time title='20 de fevereiro às 21:56' dateTime='2023-02-20 21:56:00'>Cerca 1h atrás</time>
            </div>

            <button title='Deletar um comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export { Comment }