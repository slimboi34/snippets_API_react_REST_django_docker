import React, { useState, useEffect } from 'react';
import { getSnippets } from './api';
import { deleteSnippet } from './api';
import { Button,Modal ,Box ,Typography} from '@mui/material';

const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Snippets = () => {
const [snippets, setSnippets] = useState({ results: [] });
const [open,setOpen] = useState(false)
useEffect(() => {
const fetchData = async () => {
const data = await getSnippets();
setSnippets(data);
console.log("snippet", data);
};
fetchData();
}, []);

const handleCreate = () => {
alert("Create button clicked!");
};

const handleUpdate = () => {
alert("Update button clicked!");
};

const handleDelete = async (id) => {
try {
    await deleteSnippet(id);
    alert(`Snippet ${id} deleted successfully.`);
    const newSnippets = snippets.results.filter(snippet => snippet.id !== id);
    setSnippets({ results: newSnippets });
} catch (error) {
    alert(`Failed to delete snippet ${id}.`);
}
};

return (
<table>
<thead>
<button onClick={handleCreate}>Create</button>
<tr>
<th>Title</th>
<th>Code</th>
<th>Language</th>
<th>URL</th>
<th>Owner</th>
<th>Id</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{snippets.results.map((snippet) => (
<tr key={snippet.id}>
<td>{snippet.title}</td>
<td>{snippet.code}</td>
<td>{snippet.language}</td>
<td>{snippet.url}</td>
<td>{snippet.owner}</td>
<td>{snippet.id}</td>
<td>
<button onClick={handleUpdate}>update</button>
<button onClick={() => handleDelete(snippet.id)}>delete</button>
<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal
open={open}
onClose={() => setOpen(false)}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style} >
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
</Box>
</Modal>
</td>
</tr>
))}
</tbody>
</table>
);
};

export default Snippets;