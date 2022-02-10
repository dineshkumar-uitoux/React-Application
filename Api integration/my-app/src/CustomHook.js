
import useFetch from "./useFetch";

import React from 'react'

function CustomHook() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
    {data &&
      data.map((item) => {
        return <p key={item.id} >{item.title}</p>;
      })}
  </>
  )
}

export default CustomHook