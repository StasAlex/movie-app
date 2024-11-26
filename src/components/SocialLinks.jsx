import React from "react";
import { socialPlatforms } from "../constants/constants";

const SocialLinks = ({ data }) => {
    if (!data) return (<p>No socials</p>)
  return (
    <div className="flex flex-col items-end justify-end md:flex-row flex-wrap gap-4">
      {socialPlatforms.map((platform) => {
        const value = data[platform.id];

        if (platform.id === "freebase_mid" || !value) return null;

        return (
          <a
            key={platform.id}
            href={`${platform.baseUrl}${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <span className="text-2xl">{platform.icon}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
