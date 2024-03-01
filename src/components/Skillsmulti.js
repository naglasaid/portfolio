import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import './carousel.js'
import './carousel.css'

// import 'animate.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3
        console.log(el)
        let next = el.nextElementSibling
        for (var i= 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    }
    )
    

  return (
    
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                       
                        <div className="container text-center my-3">
    
                        <div className="row mx-auto my-auto justify-content-center nn">
                            <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner bg-light" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400/31f?text=1" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400/e66?text=2" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400/7d2?text=3" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400?text=4" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 4</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400/aba?text=5" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 5</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="//via.placeholder.com/500x400/fc0?text=6" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="card-img-overlay">Slide 6</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </a>
                                <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
   
                        </div>



                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
      
    </section>
  )
}
