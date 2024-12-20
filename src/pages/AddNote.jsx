import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const AddNote = () => {
    const [title, setTitle] = useState('');
    const [description, SetDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/note/create', {
            title,
            description,
        })
        .then(response => {
            console.log('Note added:', response.data);
            setTitle('');
            SetDescription('');
            setError('');
            toast.success('Note Added Successfully');
        })
        .catch(err => {
            setError('Error adding note');
            console.error(err);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Note</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => SetDescription(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                    onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Add Note
                    </button>
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default AddNote;