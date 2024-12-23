import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user/login", {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.success) {
                alert("Login successfully");
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/notes")
            } else {
                alert("Incorrect email or password");
            }
        });
    };

    return (
        <div className="sm:ml-[21%]">
            <form className="flex flex-col justify-center w-[400px] h-[400px] bg-blue-800 p-10 mt-10 rounded-[50px]">
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
                    onClick={handleLogin}
                    className="bg-green-800 px-8 py-3 text-white w-[100px] mt-5"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;