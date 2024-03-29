import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
type Props = {
  platform: "instagram" | "facebook" | "twitter";
  to: string;
};
const platformIcon = (platform: Props["platform"]) => {
  if (platform === "instagram") {
    return <AiOutlineInstagram />;
  } else if (platform === "facebook") {
    return <AiFillFacebook />;
  } else if (platform === "twitter") {
    return <AiOutlineTwitter />;
  } else {
    return <p className="text-sm text-red-900">error</p>;
  }
};
const SocialMediaButton = ({ platform, to }: Props) => {
  return (
    <a
      href={to}
      className="bg-white mx-2 w-12 h-12 flex items-center justify-center p-2 text-customRed text-4xl rounded-xl hover:bg-gray-200 cursor-pointer"
      target={"_blank"}
      rel="noreferrer"
    >
      {platformIcon(platform)}
    </a>
  );
};

export default SocialMediaButton;
