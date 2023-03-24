import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useParams } from "react-router-dom";
import { getSnippet, createSnippet, updateSnippet, deleteSnippet } from "../api";

const SnippetsPage = () => {
    const { id: Id } = useParams();
    const [snippet, setSnippet] = useState(null);
    console.log('params',useParams())
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

    const handleSubmit = async () => {
        if (Id === 'new') {
            await createSnippet(snippet);
        } else if (snippet.code === '') {
            await deleteSnippet(Id);
        } else {
            await updateSnippet(Id, snippet);
        }
        window.location.href = '/';
    };

    const handleChange = (e) => {
        setSnippet({ ...snippet, code: e.target.value });
    };

    if (!snippet) return "loading..."

    return (
        <div className="snippet">
            <div className="snippet-header">
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
                <td>             
                </td>
            </tr>
        </tbody>
        </table>
                {Id !== 'new' && (
                    <button onClick={async() =>{ await deleteSnippet(snippet.id);window.location.href = '/';}}>Delete</button>
                )}
                <button onClick={handleSubmit}>Done</button>
            </div>
            <textarea onChange={handleChange} value={snippet.code}></textarea>
        </div>
    )
}

export default SnippetsPage;



