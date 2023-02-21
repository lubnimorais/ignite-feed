const Post = ({ author, content }) => {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}

export { Post }