import { useRouter } from 'next/router';
import React from 'react'

export default function ErrorPage() {
    const {push} = useRouter()
// console.log(a);
  return (
      <div>
             <header>
        <nav>
          <ul>
            <li className="  cursor-pointer" onClick={()=>push("/")} >Home</li>
          </ul>
        </nav>
      </header>
          404</div>
  )
}
