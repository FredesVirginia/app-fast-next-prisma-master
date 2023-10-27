
import React from 'react'
import {prisma} from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";


async function loadTasks(){
  return await prisma.task.findMany();
}

export const dynamic = 'force-dynamic';

async function HomePage() {
  const tasks = await  loadTasks();
  console.log(tasks)
  return (
    <div className="mx-auto ">
    <h1 className="text-center text-3xl my-10">Home Page</h1>
    <div className="grid gap-4 bg-white w-full grid-cols-1 lg:grid-cols-3 p-6 mx-auto">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  </div>
  )
}

export default HomePage;
