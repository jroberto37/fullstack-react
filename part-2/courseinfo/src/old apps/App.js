function App(props) {

  const notes = props.notes
  const res = notes.map ( (note, i) => i)
  console.log(res)


  const Note = ({ content, key }) => {
    return (
      <>
        <li key={ key }> { content } </li>
      </>
    )
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        { notes.map( (note) =>  <Note key={ note.id } content={ note.content } /> ) }
      </ul>
    </>
  );
}

export default App;
