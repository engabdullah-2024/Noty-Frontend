import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function UpdateNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const getSingleResult = () => {
        axios
            .get(`http://localhost:3000/note/single/${params.id}`)
            .then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.description);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getSingleResult();
    }, []);

    const handleUpdateData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:3000/note/update/${params.id}`, {
                title: title,
                description: description,
            })
            .then(() => {
                toast.success("Result has been updated successfully");
                navigate("/notes");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return<div className="ml-[30%] rounded-[10px] pt-10">
            <h1>This is update result page</h1>
            <form className="bg-blue-800 w-[350px] h-[480px] px-5 py-4">
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="outline-none w-[300px] h-[35px] mt-[10px] rounded"
                    type="text"
                    placeholder="Enter Title"
                />
                <input
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="outline-none w-[300px] h-[35px] mt-[10px] rounded"
                    type="text"
                    placeholder="Enter Description"
                />
                <button
                    onClick={handleUpdateData}
                    className="px-[10px] outline-none w-[300px] h-[35px] mt-[12px] rounded-[20px] bg-white"
                >
                    Update
                </button>
            </form>
            <Toaster />
        </div>
        
        
}

export default UpdateNote;
