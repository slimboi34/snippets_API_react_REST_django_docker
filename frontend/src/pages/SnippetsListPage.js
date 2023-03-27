import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';
import { getSnippets, deleteSnippet } from '../api';
import Swal from 'sweetalert2';
import { HashRouter, Route, Link } from 'react-router-dom';
import ConfettiButton from '../components/ConfettiButton';

const SnippetsListPage = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSnippets();
      setSnippets(data.results);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this snippet!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });
    if (result.isConfirmed) {
      await deleteSnippet(id);
      setSnippets((prevSnippets) => prevSnippets.filter((snippet) => snippet.id !== id));
      Swal.fire({
        title: 'Deleted!',
        text: 'Your snippet has been deleted.',
        icon: 'success',
      });
    }
  };

  return (
    <div className="notes">
      <ConfettiButton />
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Code</th>
              <th>Language</th>
              <th>URL</th>
              <th>Owner</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {snippets.map((snippet) => (
              <tr key={snippet.id}>
                <td>{snippet.title}</td>
                <td>{snippet.code}</td>
                <td>{snippet.language}</td>
                <td>{snippet.url}</td>
                <td>{snippet.owner}</td>
                <td>{snippet.id}</td>
                <td>
                  <Link to={`/snippet/${snippet.id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => handleDelete(snippet.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="notes-list">
        {snippets.map((snippet, index) => (
          <ListItem key={index} snippet={snippet} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default SnippetsListPage;
