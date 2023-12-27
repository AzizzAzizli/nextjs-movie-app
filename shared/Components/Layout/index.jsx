import React from "react";
import { Card } from "../Card";

export const Layout = ({ quickMovies, input, inputRef, onKeydown,loading, onClick }) => {
    console.log(quickMovies);
  return (
    <>
      <main className=" bg-slate-500 min-h-[100vh]">
        {input ? (
          <div className=" flex justify-center pt-5">
            <input
              
              placeholder="Search..."
              onKeyDown={onKeydown}
              ref={inputRef}
              className="  outline-blue-800  capitalize font-sans font-semibold outline-1 p-3  xl:w-4/12  md:w-6/12 rounded-xl"
              type="search"
            />
          </div>
        ) : (
          ""
        )}

<section className="flex flex-wrap gap-4 justify-center p-10">
  {quickMovies ? (
    quickMovies?.map((item, index) => (
      <Card  onClick={()=>onClick(item.imdbID)} key={item.imdbID} index={index + 1} {...item} />
    ))
  ) : (
    <div className="text-4xl font-sans font-bold text-slate-300">
      Empty
    </div>
  )}
</section>

      </main>
    </>
  );
};
