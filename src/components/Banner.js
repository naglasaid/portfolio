import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/NaglaaSaid.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility  from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="Container">
        <div  className="row ps-5 align-items-center">
          <div className="col-xs-12 col-md-6 col-xl-7">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome All to my Portfolio</span>
                <h1>{`Hi! I'm Naglaa Said`}<br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hello Everyone, I have 10 years of Experience in Web Development. HTML5, Css3,Bootstrap,JavaScript,<br></br>React.js. ASP.NET, C#,SQL Server. Excellent Skills in System Analysis, </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </div>
          <div className="col-xs-12 col-md-6 col-xl-5">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img id="myphoto" className="img-fluid" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
