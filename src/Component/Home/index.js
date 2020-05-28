import React from 'react'
import bg from './../Img/bg.jpg'

const Home = () => {
    return(
        <div className="container-fluid">
           <div class="jumbotron card card-image" style={{backgroundColor : 'black'  }}>
                <div class="text-white text-center py-5 px-4">
                    <div>
                    <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Lorem Ipsum dolor Sit amet</strong></h2>
                    <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <a class="btn btn-outline-light btn-md"><i class="fas fa-clone left"></i> View project</a>
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
                        I'm 19 years old and currently studying at University of International Batam on the 2nd semester. 
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="text-center">
                    <h3 className="h3">Portfolio</h3>
                    <hr className="hr"/>
                </div>
            </section>
        </div>
    )
}

export default Home