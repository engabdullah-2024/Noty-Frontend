import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/note');
                setNotes(response.data);
            } catch (err) {
                setError('Error fetching notes');
                console.error(err);
            }
        };

        fetchNotes();
    }, []);
    const deletResult = (id) =>{
        axios.delete(`http://localhost:3000/note/delete/${id}`).then(() =>{
            toast.success("Result has been deleted successfully")
            // alert("Result haas been deleted successfully")
        }).catch((error) => console.log(error))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Notes</h1>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="space-y-4">
                    {notes.map((note) => (
                        <div key={note.id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800">{note.title}</h2>
                            <p className="text-gray-700">{note.description}</p>
                            <button onClick={() => deletResult(note._id)}    className="bg-red-400 text-white p-1" >Delete</button>
                            <Link to= {`/updates/${note._id}`}>  <button className="bg-green-800 py-1 px-3 text-white rounded hover:bg-black hover:text-white border[1px]">Edit</button></Link>
                        </div>
                    ))}
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Notes;