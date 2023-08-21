import React from "react";

type textProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  text?: string | undefined | boolean;
  className: string;
  color: string;
};

export const TextTag = ({ text, className, color, as = "h4" }: textProps) => {
  const Tag = as;
  return <Tag className={`${className} ${color} `}>{text}</Tag>;
};
