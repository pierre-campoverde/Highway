import React from "react";

const TextArea = () => {
  return (
    <div className="w-full  my-2">
      <label htmlFor="message" className="hidden">
        Mensaje
      </label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={7}
        className="bg-gray-200 w-full border border-gray-300 rounded-lg p-4 text-lg outline-none focus:ring-2  resize-none
       
    "
        placeholder="Envianos tu mensaje"
      ></textarea>
    </div>
  );
};

export default TextArea;
