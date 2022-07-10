const Note = ({ content, id }) => {
    return (
      <>
        <li key={ id }> { content } </li>
      </>
    )
  }

export default Note