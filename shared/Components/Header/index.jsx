import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  const { push } = useRouter();
  return (
    <header className=" bg-blue-500 h-16 flex gap-5 items-center p-5 ">
      <nav>
        <ul className=" flex items-center">
          <li
            className="  cursor-pointer text-white text-lg font-sans font-bold hover:text-gray-700"
            onClick={() => push("/")}
          >
            My Movies
          </li>
        </ul>
      </nav>
      <Button onClick={()=>push("/search")}  variant="contained">Search</Button>
    </header>
  );
};
