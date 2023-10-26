// 'use client';
import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json();

//   return {
//     props: {
//       todos: data,
//     },
//   };
// }

export default function Home() {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const data = await res.json();
  //     console.log(data)
  //     setTodos(data);
  //   };
  //   fetchTodos();
  // }, []);

  return (
      <div>
        Main page
      </div>
  );
}
