import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const AddNote = () => {
    const [ID , setID] = useState("")
    const [title, setTitle] = useState('');
    const [description, SetDescription] = useState('');
    const [situation, SetSituation] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/note/create " , {
          
          "ID": ID,
          "title": title,
          "description": description,
          "situation": situation
         
      
        }).then(() => {
          toast.success("Result has been added successfully")
          // alert("Result has been added successfully")
          //
         
        }).catch((error) =>{
          console.log(error)
        })
      }  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Note</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                        <input
                            type="text"
                            value={ID}
                            onChange={(e) => setID(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Situation</label>
                        <textarea
                            value={situation}
                            onChange={(e) => SetSituation(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    
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