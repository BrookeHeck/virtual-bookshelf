import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function BookForm({ showModal, setShowModal, action, selectedNote, setNotes, notes, book_id }) {
  const token = localStorage.getItem('token');
  const addNote = async (noteData) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${token}` },
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/notes`,
        data: noteData,
      }
      const res = await axios(config);
      const updatedList = notes;
      updatedList.push(res.data);
      setNotes(updatedList);
    } catch (e) {
      console.log(e);
    }
  }

  const editNote = async (noteData) => {
    try {
      const config = {
        headers: { "Authorization": `Bearer ${token}` },
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/notes/${selectedNote._id}`,
        data: noteData,
      }
      const res = await axios(config);
      const updatedList = notes;
      const index = updatedList.findIndex(note => note._id === selectedNote._id);
      updatedList.splice(index, 1, res.data);
      setNotes(updatedList);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowModal(false);

    const date = new Date();
    const newNote = {
      header: e.target.header.value || selectedNote.header,
      date: selectedNote.date || `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      note: e.target.note.value || selectedNote.note,
      book_id: book_id,
    }
    try {
      action === 'add' ? addNote(newNote) : editNote(newNote);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>Add a Book</Modal.Header>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='header'>header</Form.Label>
          <Form.Control type="header" placeholder="Enter header" id='header' />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='note'>note</Form.Label>
          <Form.Control type="note" placeholder="Enter note" id='note' />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Modal>
  )
}