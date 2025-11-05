import React from 'react';
import styled from 'styled-components';

const DownloadButton = ({ href, download }) => {
  return (
    <StyledWrapper>
      <a 
        href={href} 
        download={download}
        className="button"
      >
        <span className="button__text">Download Resume</span>
        <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" /><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" /><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" /></svg></span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --main-focus: #facc15;
    --font-color: #facc15;
    --bg-color-sub: #1f2937;
    --bg-color: #111827;
    --main-color: #facc15;
    position: relative;
    width: 180px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
    font-family: 'Orbitron', sans-serif;
    text-decoration: none;
  }

  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    transform: translateX(12px);
    color: var(--font-color);
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(135px);
    height: 100%;
    width: 45px;
    background-color: var(--bg-color-sub);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 22px;
    fill: var(--main-color);
  }

  .button:hover {
    background: var(--bg-color);
    box-shadow: 6px 6px var(--main-color);
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 176px;
    transform: translateX(0);
  }

  .button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px var(--main-color);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .button {
      width: 160px;
      height: 45px;
    }

    .button .button__text {
      font-size: 12px;
      transform: translateX(10px);
    }

    .button .button__icon {
      transform: translateX(118px);
      width: 42px;
    }

    .button:hover .button__icon {
      width: 156px;
    }

    .button .svg {
      width: 20px;
    }
  }

  @media (max-width: 480px) {
    .button {
      width: 150px;
      height: 42px;
    }

    .button .button__text {
      font-size: 11px;
      transform: translateX(8px);
    }

    .button .button__icon {
      transform: translateX(110px);
      width: 40px;
    }

    .button:hover .button__icon {
      width: 146px;
    }

    .button .svg {
      width: 18px;
    }
  }
`;

export default DownloadButton;