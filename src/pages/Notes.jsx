
import axios from "axios"
import {useState , useEffect} from "react"
import {toast , Toaster} from "react-hot-toast"
import { Link } from "react-router-dom"







function Notes() {
    



const [results, setResults] = useState([])
    //  Function that shows the API

const handleGetData = () =>{
    axios.get("http://localhost:3000/note") .then((response) =>{

        setResults(response.data)
    }).catch((error) =>{
        console.log(error)
    })
    
  
}


useEffect(() =>{
    handleGetData()
})


const deletResult = (id) =>{
   
    axios.delete(`http://localhost:3000/note/delete/${id}`).then(() =>{
        toast.success("Note has been deleted successfully")
        // alert("Result haas been deleted successfully")
    }).catch((error) => console.log(error))
}

    return <div>


    <div className=" px-[20px] py-[10px] ml-[10%]  rounded-[10px]   h-[150px]">
            <h1> This is  Results Page </h1>
            <div>
                <table className="w-full text-center">
                    <tr>
                    <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        Situation
                        <th>Actions</th>
                
                    </tr>
                    {
                        results.map((data) =>{
                            return<tr>
                                
                                <td className="border-2 p-1 "> {data.ID}</td>
                                <td className="border-2 p-1 "> {data.title}</td>

                                <td className="border-2 p-1 "> {data.description}</td>
                                <td className="border-2 p-1 "> {data.situation}</td>

                                <td className="border-2 p-1 "> <button onClick={() => deletResult(data._id)}    className="bg-red-400 text-white p-1" >Delete</button> </td>
            <Link to= {`/updates/${data._id}`}>
            <td className="bg-green-800 py-1 px-3 text-white rounded hover:bg-black hover:text-white border[1px]">Edit</td></Link>
                            </tr>
                        })
                    }
                </table>
            </div>
<Toaster />
    </div>
    </div>           
}

export default Notes