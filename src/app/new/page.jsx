"use client"
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useEffect , useState} from "react";

function NewPage({params}) {
  const router = useRouter();
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");


  useEffect(()=> {
    if(params){
      fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title)
        setDescription(data.description)
  })
    }
  } , [params])



  const handleSubmit = async (e) => {
    e.preventDefault();
    // /api/tasks/${params.id}
    if(params.id){
      try {
        const response = await axios.put(`/api/tasks/${params.id}`, {
          title,
          description,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const updatedTask = response.data;
        console.log(updatedTask);
  
        
      } catch (error) {
        console.error(error);
      }
    }else{

    try {
      console.log(title , description);
      const response = await axios.post('/api/tasks', { title, description } , {
        headers: {
          'Content-Type': 'application/json'
         }});
      console.log(response.data);
      
    } catch (error) {
     alert("Ocurrio un Error")
    }

    }

    router.refresh();
    router.push('/');

  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="block w-[400px] border-10 bg-white mx-auto flex flex-col justify-center rounded-lg my-10 py-10">
        <h1 className="text-center py-3 my-3 text-2xl font-bold">Nueva Tarea</h1>
        <div className="block mx-auto flex flex-col justify-center items-center w-[350px] ">
          <input 
          id="title"
          type="text"
          placeholder="Escribe aquí  " 
          className="border-2 border-gray-200 p-2 my-2 rounded-lg text-gray-500 placeholder-gray-500 w-full"
          onChange={ (e) => setTitle(e.target.value)}
          value={title}
          />
          <textarea 
          id="description"
          className="border-2 border-gray-200 p-2 my-2 rounded-lg text-gray-500 placeholder-gray-500 w-full" 
          placeholder="Descripción"
          onChange={ (e) => setDescription(e.target.value)}
          value={description}
          ></textarea>
          <input type="submit" className="btn my-4 bg-blue-600 p-4 text-white font-bold hover:bg-gray-300 hover:text-black rounded-lg w-full" value="Crear" />
          <p className="text-gray-500 text-1xl text-center my-4">😃 ¡Oye! 🌈 Para hacer realidad tus sueños, ¡transfórmalos en una lista de tareas! 🎉</p>
        </div>
      </form>
    </div>
  );
}

export default NewPage;

