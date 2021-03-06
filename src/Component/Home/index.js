import React from 'react'
import bg from './../Img/bg.jpg'
import {
    FaCss3,
    FaHtml5,
    FaBootstrap,
    FaJs,
    FaReact,
    FaNodeJs
} from 'react-icons/fa'
import {DiMongodb,DiJavascript1} from 'react-icons/di'
const Home = () => {
    return(
        <div className="container-fluid">
           <div class="jumbotron card card-image" style={{backgroundColor : 'black'  }}>
                <div class="text-white text-center py-5 px-4">
                    <div>
                    <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Welcome to my Personal Website</strong></h2>
                    <p class="mx-5 mb-5"> My name is Ferdinand William, you can read more detailed information about me below.
                    </p><p>You can see the project that i made by clicking below
                    </p>
                    <a class="btn btn-outline-light btn-md" href="https://tri-shop.netlify.app/" target="_blank"><i class="fas fa-clone left"></i> View project</a>
                    </div>
                </div>
            </div>
            <section className="mt-5">
                <div className="row">
                    <div className="col-md-6 mb-4 d-flex justify-content-center">
                        <img src={require("./../Img/pp.png")} class="img-fluid z-depth-1-half" alt=""/>
                    </div>
                    <div class="col-md-6 mb-4">
                        <h3 class="h3 mb-3">Personal Information</h3>
                        <p><strong>Ferdinand William</strong></p>
                        <p>Full Stack Developer</p>
                        <hr/>
                        <p>
                        My name is Ferdinand, i am a Full Stack Developer from Glints Academy x ImpactByte #6.
                        </p>
                        <p>
                        I'm 19 years old and currently studying at University of International Batam on the 2nd semester. I like to read some guide and play games on my free time, i always explore to learn something new.  
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="text-center">
                    <h3 className="h3">Portfolio</h3>
                    <hr className="hr"/>
                </div>
                <div className="d-flex justify-content-center">
                <div className="col-md-6">
                    <h2>Trishop</h2>
                    <p>Trishop is an E-Commerce website that my team made, current features are Sign up, Sign in, Cart, Create an Item to Sell</p>
                    <p>Check it out here : <a href="https://tri-shop.netlify.app/" target="_blank">https://tri-shop.netlify.app/</a></p>
                </div>
                </div>
                
            </section>
            <section>

                <h2 class="my-5 h3 text-center">My Skills</h2>
                <hr/>
                <div class="row features-small mt-5">

                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                            <FaHtml5 size={60}/>
                        </div>
                        <div class="col-10 mb-2 pl-3">
                            <h5 class="feature-title font-bold mb-1">HTML5</h5>
                            <p class="grey-text mt-2">9 / 10
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                            <FaCss3 size={60}/>
                        </div>
                        <div class="col-10 mb-2">
                            <h5 class="feature-title font-bold mb-1">CSS</h5>
                            <p class="grey-text mt-2">7 / 10
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                    <div class="row">
                    <div class="col-2">
                        <FaBootstrap size={60} style={{color: "purple"}}/>
                    </div>
                    <div class="col-10 mb-2">
                        <h5 class="feature-title font-bold mb-1">Bootstrap</h5>
                        <p class="grey-text mt-2">7 / 10
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <div class="row">
                    <div class="col-2">
                        <FaJs size={60}/>
                    </div>
                    <div class="col-10 mb-2">
                        <h5 class="feature-title font-bold mb-1">Javascript</h5>
                        <p class="grey-text mt-2"> 7 / 10
                        
                        </p>
                    </div>
                    </div>
                </div>

                </div>

                <div class="row features-small mt-4 wow fadeIn">

                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                            <DiJavascript1 size={60} style={{color: "black"}}/>
                        </div>
                        <div class="col-10 mb-2">
                            <h5 class="feature-title font-bold mb-1">Express</h5>
                            <p class="grey-text mt-2">7 / 10</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                           <DiMongodb size={60} style={{color: "green"}}/>
                        </div>
                        <div class="col-10 mb-2">
                            <h5 class="feature-title font-bold mb-1">MongoDB</h5>
                            <p class="grey-text mt-2">7 / 10
                            </p>
                        </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                            <FaReact size={60} style={{color : "blue"}}/>
                        </div>
                        <div class="col-10 mb-2">
                            <h5 class="feature-title font-bold mb-1">ReactJS</h5>
                            <p class="grey-text mt-2">8 / 10</p>
                        </div>
                        </div>
                    </div>


                    <div class="col-xl-3 col-lg-6">
                        <div class="row">
                        <div class="col-2">
                            <FaNodeJs size={60}/>
                        </div>
                        <div class="col-10 mb-2">
                            <h5 class="feature-title font-bold mb-1">NodeJS</h5>
                            <p class="grey-text mt-2">7 / 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Home