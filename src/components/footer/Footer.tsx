import React from "react";

export const Footer = () => {
  return (
    <footer className="py-6 px-10 flex items-center top-0 w-full justify-between bg-inherit text-white">
      <h3>
        Develop with love by{" "}
        <a
          className="text-orange-200 hover:underline"
          href="https://github.com/aguirrefab"
        >
          @aguirrefab
        </a>
      </h3>
      <div>
        Inspired by{" "}
        <a className="hover:underline" href="https://www.youtube.com/@LamaDev">
          @LamaDev
        </a>
      </div>
    </footer>
  );
};
