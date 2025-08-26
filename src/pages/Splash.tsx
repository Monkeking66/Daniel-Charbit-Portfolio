
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Splash = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, duration: 1, ease: "power2.inOut" });
    gsap.from(loaderRef.current, { opacity: 0, duration: 1, delay: 0.5, ease: "power2.inOut" });

    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, { opacity: 0, duration: 1, ease: "power2.inOut" });
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          navigate("/home");
        },
      });
    }, 4000); // 4 second delay to match animation

    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = `
    .splash-container {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      --color: rgba(114, 114, 114, 0.3);
      background-color: #191a1a;
      background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
          linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
      background-size: 55px 55px;
    }

    @keyframes blinkCursor {
      50% {
        border-right-color: transparent;
      }
    }

    @keyframes typeAndDelete {
      0%,
      10% {
        width: 0;
      }
      45%,
      55% {
        width: 6.2em;
      } /* adjust width based on content */
      90%,
      100% {
        width: 0;
      }
    }

    .terminal-loader {
      border: 0.1em solid #333;
      background-color: #1a1a1a;
      color: #0f0;
      font-family: "Courier New", Courier, monospace;
      font-size: 1.2em; /* Increased font size */
      padding: 1.5em 1em;
      width: 15em; /* Increased width */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }

    .terminal-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1.5em;
      background-color: #333;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 0 0.4em;
      box-sizing: border-box;
    }

    .terminal-controls {
      float: right;
    }

    .control {
      display: inline-block;
      width: 0.6em;
      height: 0.6em;
      margin-left: 0.4em;
      border-radius: 50%;
      background-color: #777;
    }

    .control.close {
      background-color: #e33;
    }

    .control.minimize {
      background-color: #ee0;
    }

    .control.maximize {
      background-color: #0b0;
    }

    .terminal-title {
      float: left;
      line-height: 1.5em;
      color: #eee;
    }

    .text {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.2em solid green; /* Cursor */
      animation:
        typeAndDelete 4s steps(11) infinite,
        blinkCursor 0.5s step-end infinite alternate;
      margin-top: 1.5em;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div
        ref={containerRef}
        className="splash-container"
      >
        <div ref={loaderRef} className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    </>
  );
};

export default Splash;
