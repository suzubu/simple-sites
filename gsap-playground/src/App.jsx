import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      x: 200,
      rotation: 360,
      scale: 1.2,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Scroll Down ↓</h1>

      <div className="scroll-section">
        <div ref={boxRef} className="box" />
        <p ref={textRef} className="scroll-text">
          This text fades in and slides up when it enters the viewport.
        </p>
      </div>
    </div>
  );
}

export default App;
