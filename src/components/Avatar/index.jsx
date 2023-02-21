import styles from './styles.module.css'

const Avatar = ({ avatarURL, name, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarURL} alt={name}
    />
  )
}

export { Avatar }