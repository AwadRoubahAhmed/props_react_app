import React from "react";

function Button({ id, handelBtn, children }) {
  const handelClick = () => {
    console.log(`The buttton with id ${id} is clicked!!`);
  };
  return (
    <div>
      <button
        onClick={handelClick}
        className="bg-indigo-700 hover:bg-indigo-900 text-white text-base font-semibold my-3 mx-auto p-2 rounded-md"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
