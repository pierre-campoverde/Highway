import InputGroup from "components/Molecules/InputGroup";
import TextArea from "components/Molecules/TextArea";
import React, { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({ Nombre: "", Email: "", Mensaje: "" });

  const [formState, setFormState] = useState({ state: "", message: "" });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputs.Nombre && inputs.Email && inputs.Mensaje) {
      setFormState({ state: "Loading", message: "" });
      try {
        const res = await fetch("api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const { error } = await res.json();
        if (error) {
          setFormState({
            state: "error",
            message: error,
          });
          return;
        }
        setFormState({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          Nombre: "",
          Email: "",
          Mensaje: "",
        });
      } catch (error) {
        setFormState({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };
  console.log(inputs);
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup callback={handleChange} type="text" label="Nombre" />
      <InputGroup callback={handleChange} type="email" label="Email" />
      <TextArea callback={handleChange} />
      <input
        type="submit"
        value="Enviar"
        className="bg-white text-customRed font-semibold border border-customRed border-2 rounded-lg w-full sm:w-6/12 h-14 text-lg cursor-pointer hover:bg-customRed hover:text-white md:float-right"
      />
      {formState.state === "loading" ? (
        <div>Sending....</div>
      ) : formState.state === "error" ? (
        <div>{formState.message}</div>
      ) : (
        formState.state === "success" && <div>Sent successfully</div>
      )}
    </form>
  );
};

export default ContactForm;
