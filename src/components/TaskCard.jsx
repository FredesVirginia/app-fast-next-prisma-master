"use client"

import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
function TaskCard({task}){
    const router = useRouter();
    
   
      const editTask = ()=>{
        router.push("/tasks/edit/" + task.id);
      }

      const deleteTask = async () =>{
        try {
          await axios.delete(`/api/tasks/${task.id}`);
          router.refresh();
          router-push("/")
          
        } catch (error) {
          alert("Ocurrio un Error")
        }
      }

     return (
        
        <div 
        className="flex flex-col justify-center border-2 border-gray-300 p-2 my-2 hover:border-4 hover:border-gray-500 hover:text-green-500 hover:cursor-pointer"
        
        >
          <h3 className="font-bold text-center">{task.title}</h3>
          <p className="text-center">{task.description}</p>
          <p className="text-center">{new Date(task.createdAt).toLocaleDateString()}</p>
          <div className="flex flex-row mt-auto mx-auto items-center justify-between space-x-12">
          <button className="px-1 hover:bg-blue-500 lg:hover:border-blue-500 lg:border-0 lg:px-4 border-4 border-gray-300"
           onClick={editTask}
          >📝</button>
          <button className="px-1 hover:bg-blue-500 lg:hover:border-blue-500 lg:border-0 lg:px-4 border-4 border-gray-300"
           onClick={deleteTask}
          > 🪣</button>
          </div>
        
      </div>
      
     )
}

export default TaskCard;

