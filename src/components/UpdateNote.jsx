import { useState , useEffect } from "react"
import axios from "axios"
// ID ga kor yaalo soo qabo
import { useParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {toast , Toaster} from "react-hot-toast"


function UpdateNote (){
    const [ID , setID] = useState("")
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [situation , setSituation] = useState("")







const params = useParams()
const navigate = useNavigate()




// API oo soo bandhigaayo 1
const getSIngleResult = () =>{
    axios.get(`http://localhost:3000/note/single/${params.id}`).then((respone)=>{
setTitle(respone.data.title)
setDescription(respone.data.description)


    }).catch((error) =>{
        console.log(error)
    })
}

useEffect(() =>{
    getSIngleResult()
},[])




// ApI oo xogta update gareenaayo
 const handleUpdateData = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:3000/note/update/${params.id}`,{
        "ID": ID,
        "title": title,
        "description": description,
        "situation": situation,
        

     
    }).then(() =>{
        // alert("Result has been updated successfully")
        toast.success("Result has been updated successfully")
        
        navigate("/notes")
    }).catch((error) =>{
        console.log(error)
    })
 }


    return<div className="ml-[30%] rounded-[10px] pt-10">
        <h1>This is update result page</h1>
         <form className="bg-blue-800 w-[350px] h-[480px] px-5 py-4 "  >
         <input  value={ID} onChange={(event) => setID(event.target.value)}     className=" outline-none w-[300px] h-[35px] mt-[10px] rounded  "   type="text" placeholder="Enter Your Title"></input>
      <input  value={title} onChange={(event) => setTitle(event.target.value)}     className=" outline-none w-[300px] h-[35px] mt-[10px] rounded  "   type="text" placeholder="Enter Your Title"></input>
      <input  value={description} onChange={(event) => setDescription(event.target.value)}  className=" outline-none w-[300px] h-[35px] mt-[10px] rounded"   type="text" placeholder="Enter Your Description"></input>
      <input  value={situation} onChange={(event) => setSituation(event.target.value)}     className=" outline-none w-[300px] h-[35px] mt-[10px] rounded  "   type="text" placeholder="Enter Your Title"></input>
    <h1 className="text-[20px] text-white mt-[10px] font-semibold">Your Results</h1>
     


     <button   onClick={handleUpdateData}     className="px-[10px] outline-none w-[300px] h-[35px] mt-[12px] rounded-[20px] bg-white  ">Update</button>
     
     </form>

<Toaster />
    </div>
}


export default UpdateNote