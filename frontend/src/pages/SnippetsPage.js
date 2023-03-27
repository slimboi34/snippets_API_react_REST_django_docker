import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useParams } from 'react-router-dom';
import { getSnippet, createSnippet, updateSnippet, deleteSnippet } from '../api';
import Swal from 'sweetalert2';

const SnippetsPage = () => {
const { id: Id } = useParams();
const [snippet, setSnippet] = useState(null);

useEffect(() => {
async function fetchSnippet() {
if (Id !== 'new') {
const data = await getSnippet(Id);
setSnippet(data);
} else {
setSnippet({ code: '' });
}
}
fetchSnippet();
}, [Id]);

const handleDelete = async () => {
const result = await Swal.fire({
title: 'Are you sure?',
text: 'You will not be able to recover this snippet!',
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Yes, delete it!',
cancelButtonText: 'Cancel',
});
if (result.isConfirmed) {
await deleteSnippet(snippet.id);
Swal.fire({
title: 'Deleted!',
text: 'Your snippet has been deleted.',
icon: 'success',
}).then(() => {
window.location.href = '/';
});
}
};

const handleSubmit = async () => {
if (Id === 'new') {
await createSnippet(snippet);
} else if (snippet.code === '') {
await deleteSnippet(Id);
} else {
await updateSnippet(Id, snippet);
}
Swal.fire({
title: 'Snippet saved!',
text: 'The snippet has been successfully saved.',
icon: 'success',
confirmButtonText: 'OK',
}).then(() => {
window.location.href = '/';
});
};

const handleChange = (e) => {
setSnippet({ ...snippet, code: e.target.value });
};

if (!snippet) return 'loading...';

return (
<div className='snippet'>
<div className='snippet-header'>
<h3>
<ArrowLeft onClick={handleSubmit} />
</h3>
<table>
<thead>
<tr>
<th>Code</th>
<th>Language</th>
<th>URL</th>
<th>Owner</th>
<th>Id</th>
</tr>
</thead>
<tbody>
<tr key={snippet.id}>
<td>{snippet.code}</td>
<td>{snippet.language}</td>
<td>{snippet.url}</td>
<td>{snippet.owner}</td>
<td>{snippet.id}</td>
</tr>
</tbody>
</table>
{Id !== 'new' && (
<button onClick={handleDelete}>Delete</button>
)}
<button onClick={handleSubmit}>Done</button>
</div>
<h6>Code</h6>
<textarea onChange={handleChange} value={snippet.code}></textarea>
</div>

);
};

export default SnippetsPage;


