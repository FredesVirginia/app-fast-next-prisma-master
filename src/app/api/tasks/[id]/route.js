import {NextResponse} from "next/server";
import {prisma} from '@/libs/prisma'


export async function GET (request , {params}){
        try {
            console.log("El params recibido" , params.id);
            const task = await prisma.task.findUnique({
               where :{
                   id: Number(params.id)
               }
            });
       
            console.log("Las task es " , task)
            return NextResponse.json( task);
        }catch(error){
                return NextResponse.json(error.message);
        }
}

export async  function PUT (request , {params}){
   try{
        const data = await request.json();
     const taskUpdate=   await prisma.task.update({
            where : {
                id : Number(params.id)
            } , 

            //Aqui le pasmos el data completo, por si nos pasan el title solamente
            // o la descripcion solament, o los dos
            data : data
        })
        console.log("La tarea actualizada es " , taskUpdate);
        return NextResponse.json(taskUpdate);

   }catch(error){
    return NextResponse.json(error.message);
   }
}

export async function DELETE (request , {params}){
    try{
        const taskRemoved = await prisma.task.delete({
            where : {
                id : Number(params.id)
            }
       });
       console.log("Las task removida es " , taskRemoved);
    }catch(error){
        return NextResponse.json(error.message);    
    }

  
}