import React from "react";
import { useIntl } from "react-intl";
type Props = {
  status: string;
  callback: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const TextArea = ({ status, callback }: Props) => {
  const intl = useIntl();
  return (
    <div className="w-full  my-2">
      <label htmlFor="Mensaje" className="hidden">
        Mensaje
      </label>
      <textarea
        name="Mensaje"
        id="Mensaje"
        onChange={callback}
        disabled={status === "loading" ? true : false}
        cols={30}
        rows={7}
        className="bg-gray-200 w-full border border-gray-300 rounded-lg p-4 text-lg outline-none focus:ring-2  resize-none disabled:cursor-progress disabled:opacity-50
       
    "
        placeholder={intl.formatMessage({
          id: "component.contactForm.message",
        })}
      ></textarea>
    </div>
  );
};

export default TextArea;
