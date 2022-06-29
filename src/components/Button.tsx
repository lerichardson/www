import * as React from "react";
import { css } from "@emotion/react";

export interface ButtonProps {
  children?: React.ReactNode;
  link: string;
  text?: string;
  classes?: string;
}

export const Button = ({ children, link, text, classes }: ButtonProps) => {
  return (
    <a
      href={link}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <div
        css={css`
          backdrop-filter: blur(12px) saturate(100%);
          -webkit-backdrop-filter: blur(12px) saturate(100%);
          background-color: rgba(17, 25, 40, 0.69);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          transition: all 0.2s ease-in-out;
          padding: 1em;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          ${classes}

          &:hover {
            backdrop-filter: blur(25px) saturate(100%);
            -webkit-backdrop-filter: blur(25px) saturate(100%);
            background-color: rgba(17, 25, 40, 0.25);
          }

          @media (max-width: 600px) {
            width: 15em;
          }
        `}
      >
        {children || text}
      </div>
    </a>
  );
};
