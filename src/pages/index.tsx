import * as React from "react";
import { css } from "@emotion/react";

const IndexPage = () => {
  return (
    <main>
      <div
        css={css`
          padding: 2em;
        `}
      >
        <img
          src="https://file.coffee/u/gnzs8XN2XUR0vwobhdAU8.jpg"
          width={128}
          height={128}
          css={css`
            border-radius: 50%;
            box-shadow: 14px 13px 24px -11px rgba(133, 133, 133, 0.5);
            -webkit-box-shadow: 14px 13px 24px -11px rgba(133, 133, 133, 0.5);
            -moz-box-shadow: 14px 13px 24px -11px rgba(133, 133, 133, 0.5);
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
        `}
      >
        <h1>Hi! I'm Levi.</h1>
        <br />
        <h2
          css={css`
            display: flex;
            flex-direction: row;
            color: white;
          `}
        >
          A{" "}
          <svg
            version="1.1"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            fill="white"
          >
            <g>
              <path
                d="M320.107,196.181c-9.173-12.224-11.157-27.925-10.773-36.181c0-16.043-17.728-28.587-42.667-31.403V10.667
			C266.667,4.779,261.888,0,256,0c-5.888,0-10.667,4.779-10.667,10.667v117.931c-24.939,2.816-42.667,15.403-42.667,31.893
			c0.363,7.787-1.6,23.467-10.773,35.691c-47.061,6.805-53.227,18.411-53.227,27.819c0,13.909,19.755,21.76,43.541,26.24
			L223.637,416l-20.672,82.752c-1.429,5.696,2.048,11.499,7.765,12.928c0.875,0.213,1.749,0.32,2.603,0.32
			c4.8,0,9.131-3.221,10.325-8.085l21.333-85.333c0.427-1.685,0.427-3.477,0-5.163l-39.979-159.915
			c7.253,0.747,14.421,1.301,21.141,1.685l62.187,248.725c1.195,4.864,5.547,8.085,10.325,8.085c0.853,0,1.728-0.107,2.603-0.32
			c5.717-1.429,9.195-7.211,7.765-12.928l-32.853-131.435c0.043-0.107,0.149-0.128,0.192-0.235l53.077-116.779
			c23.936-4.459,43.883-12.331,43.883-26.304C373.333,214.571,367.168,202.965,320.107,196.181z M267.904,334.187l-19.563-78.251
			c2.837,0.043,5.504,0.064,7.659,0.064c10.176,0,28.907-0.32,48.448-2.219L267.904,334.187z M280.341,234.048
			C284.736,232.725,288,228.8,288,224v-21.333c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667V224
			c0,5.227,3.84,9.365,8.789,10.283c-6.165,0.235-12.587,0.384-19.456,0.384c-6.869,0-13.291-0.149-19.456-0.384
			c4.949-0.917,8.789-5.056,8.789-10.283v-21.333c0-5.888-4.779-10.667-10.667-10.667S224,196.779,224,202.667V224
			c0,4.821,3.264,8.747,7.659,10.069c-33.344-1.557-55.829-6.059-66.325-10.005c5.973-2.24,16.491-5.056,33.557-7.296
			c2.539-0.341,4.864-1.557,6.571-3.477c14.741-16.491,19.243-38.613,18.56-53.291c0-2.645,11.371-10.667,32-10.667
			s32,8.021,32,10.176c-0.704,15.168,3.797,37.291,18.539,53.781c1.707,1.92,4.032,3.136,6.571,3.477
			c17.067,2.24,27.563,5.077,33.536,7.296C336.149,227.989,313.664,232.491,280.341,234.048z"
              />
            </g>
          </svg>
          Seattle-based developer
        </h2>
        <div
          css={css`
            width: 75%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 1em;
          `}
        >
          <a
            href="https://poly.work/litbelb"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              Polywork
            </div>
          </a>
          <a
            href="https://github.com/lerichardson"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              GitHub
            </div>
          </a>
          <a
            href="https://twitter.com/onlyRealLevir"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              Twitter
            </div>
          </a>

          <a
            href="mailto:levir620@skiff.com"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              Email me!
            </div>
          </a>

          <a
            href="https://open.spotify.com/user/hb76ow6b0e1vcmn22n4ogot37?si=4e1402d7078d4a17"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              Spotify
            </div>
          </a>
          <a
            href="https://twitch.tv/litbelb_"
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

                &:hover {
                  backdrop-filter: blur(25px) saturate(100%);
                  -webkit-backdrop-filter: blur(25px) saturate(100%);
                  background-color: rgba(17, 25, 40, 0.25);
                }
              `}
            >
              Twitch
              <small>I stream code here sometimes</small>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
