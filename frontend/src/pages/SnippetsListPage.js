import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import { HashRouter as Router, Route } from "react-router-dom";
import { getSnippets } from '../api';



const SnippetsListPage = () => {

    let [snippets, setSnippets] = useState({results:[]})

    useEffect(() => {
        getSnippets()
    }, [])


    let getSnippets = async () => {

        let response = await fetch('http://localhost:8132/api/snippets/')
        let data = await response.json()
        setSnippets(data)
    }
    
    function snippetRow(snippet, index) {
        return <ListItem key={index} snippet={snippet} />
    }

    return (
        <div className="notes">
            <h2>list</h2>
            {/* <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{snippets.results.length}</p>
            </div> */}
            {/* <div className="notes-list">
                {snippets.results.map((snippet, index) => (
                    <ListItem key={index} snippet={snippet} />
                ))}
            </div> */}
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
                <th>Created</th>
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
                <td>{snippet.created}</td>  
                </tr>
            ))}
            </tbody>
            </table>
            </div>
            <div className="notes-list">
                {snippets.results.map(snippetRow)}
            </div>
            <AddButton />
        </div>
    )
}

export default SnippetsListPage;

