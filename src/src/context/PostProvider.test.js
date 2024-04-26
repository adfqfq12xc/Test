import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PostProvider } from '@/context/PostContext';

describe('PostProvider', () => {
  test('addNotes function adds a new note', () => {
    const TestComponent = () => {
      const { addNotes, notes } = React.useContext(PostContext);
      addNotes({ id: 2, note: 'Post 2' });
      return <div>{notes.map(note => note.note)}</div>;
    };

    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>
    );

    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  test('updateNotes function updates a note', () => {
    const TestComponent = () => {
      const { updateNotes, notes } = React.useContext(PostContext);
      updateNotes(1, 'Updated Post 1');
      return <div>{notes.find(note => note.id === 1)?.note}</div>;
    };

    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>
    );

    expect(screen.getByText('Updated Post 1')).toBeInTheDocument();
  });

  test('deleteNotes function deletes a note', () => {
    const TestComponent = () => {
      const { deleteNotes, notes } = React.useContext(PostContext);
      deleteNotes(1);
      return <div>{notes.map(note => note.note)}</div>;
    };

    render(
      <PostProvider>
        <TestComponent />
      </PostProvider>
    );

    expect(screen.queryByText('Post 1')).not.toBeInTheDocument();
  });
});
