import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

// let getTitle = (note) => {

//     let title = note.body.split('\n')[0]
//     if (title.length > 45) {
//         return title.slice(0, 45)
//     }
//     return title
// }

const ListItem = ({ snippet }) => {
    return (
        <Link to={`/snippet/${snippet.id}`}>
            <div className="notes-list-item" >
                {/* <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getContent(note)}</p> */}
                <h3>{snippet.code}</h3>
            </div>

        </Link>
    )
}

export default ListItem
