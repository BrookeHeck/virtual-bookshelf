import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Note from './Note';
import NoteForm from './NoteForm';
const axios = require('axios');

export default function Notes({ book_id, setShowNotes }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [notes, setNotes] = useState([]);
  const [action, setAction] = useState('');

  useEffect(() => {
    const getNotes = async() => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { "Authorization": `Bearer ${token}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/notes/${book_id}`,
        }
        const res = await axios(config);
        setNotes(res.data);
      } catch(e) {console.log(e)}
    }
    getNotes();
  }, [setNotes, book_id, notes]);

  return (
    <>
      <Button onClick={() => setShowNotes(false)}>Back to Books</Button>
      <Button onClick={() => {setShowModal(true); setAction('add')}}>Add Note</Button>
      <NoteForm 
        setShowModal={setShowModal}
        showModal={showModal}
        selectedNote={selectedNote}
        notes={notes}
        setNotes={setNotes}
        book_id={book_id}
        action={action}
      />
      {
        notes &&
        notes.map(note => {
          return <Note key={note._id} note={note} setSelectedNote={setSelectedNote} />
        })
      }
    </>
  )
}

// async function deleteNote(id) {
//   try {
//     const token = localStorage.getItem('token');
//     const config = {
//       headers: { "Authorization": `Bearer ${token}` },
//       method: 'delete',
//       baseURL: process.env.REACT_APP_SERVER,
//       url: `/notes/${id}`,
//     }
//     const res = await axios(config);
//     console.log(res.data);
//     return res.data;
//   } catch(e) {console.log(e)}
// }