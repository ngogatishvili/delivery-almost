import React,{useState} from 'react'
import {motion} from "framer-motion"
import {MdFastfood,MdCloudUpload,MdDelete,MdFoodBank} from "react-icons/md"
import { categories } from '../utils/data'
import Loader from './Loader'

const CreateContainer = () => {
  const [title,setTitle]=useState("")
  const [calories,setCalories]=useState("")
  const [price,setPrice]=useState("")
  const [category,setCategory]=useState("other")
  const [imageAsset,setImageAsset]=useState(null)
  const [fields,setFields]=useState(false)
  const [alertStatus,setAlertStatus]=useState("danger");
  const [msg,setMsg]=useState(null);
  const [isLoading,setIsLoading]=useState(false)
  
  const uploadImage=()=>{

  }

  const deleteImage=()=>{

  }


 
 
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
          {fields && (
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
             className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus==="danger"?"bg-red-400 text-red-800":"bg-emerald-400 text-emerald-800"}`}>{msg}</motion.p>
          )}

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFastfood className="text-xl text-grey-700"/>
              <input className="w-full h-full text-bg bg-transparent outline-none font-semibold border-none placeholder:text-gray-400 text-textColor" type="text" value={title} placeholder="Give me a title..." onChange={e=>setTitle(e.target.value)}/>

          </div>
          <div className="w-full">
              <select className="w-full bg-transparent p-2 outline-none text-base  border-b-2 border-gray-200 rounded-md cursor-pointer" onChange={(e)=>setCategory(e.target.value)} value={category} >
                <option value="other" className="bg-white">Select Category</option>
                {categories.map(category=>(
                  <option className=" border-0 outline-0 capitalize bg-white text-headingColor" value={category.urlParamName} key={category.id}>{category.name}</option>
                ))}
              </select>
          </div>

          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
             {isLoading? <Loader/>:<>
                  {!imageAsset?
                  <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700"/>
                          <p className="text-gray-500 hover:text-gray-700">Click Here to upload</p>
                      </div>
                      <input className="w-0 h-0" type="file" name="uploadimage" accept="image/*" onChange={uploadImage}/>
                  </label>
              </>
              :<>
              <div className="relative h-full">
                <img className="w-full h-full object-cover" src={imageAsset} alt="uploadedimage"/>
                <button className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" onClick={deleteImage}><MdDelete className="text-white"/></button>
              </div>
              </>
                  }
             </>}     
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFoodBank className="text-gray-700 text-2xl"/>
                    <input type="text" placeholder="Calories" className="bg-transparent outline-none w-full h-full text-lg border-none placeholder:text-gray-400" required/>
                </div>
          </div>



      </div>
    </div>
  )
}

export default CreateContainer;
