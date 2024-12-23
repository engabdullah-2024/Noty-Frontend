import { useState } from "react";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegisterResult = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/register", {
                name: name,
                email: email,
                password: password,
            })
            .then(() => {
                alert("Result has been added successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sm:ml-[21%]">
            <form className="flex flex-col justify-center w-[400px] h-[400px] bg-blue-800 p-10 mt-10 rounded-[50px]">
                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-[300px] h-[100px] rounded hover:bg-green-800 hover:text-white mt-5"
                    type="text"
                    placeholder="Enter name"
                />
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-[300px] h-[100px] rounded hover:bg-green-800 hover:text-white mt-5"
                    type="text"
                    placeholder="Enter email"
                />
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-[300px] h-[100px] rounded hover:bg-green-800 hover:text-white mt-5"
                    type="text"
                    placeholder="Enter password"
                />
                <button
                    onClick={handleRegisterResult}
                    className="bg-green-800 px-8 py-3 text-white w-[100px] mt-5"
                >
                    Save
                </button>
            </form>
        </div>
    );
}

export default Register;