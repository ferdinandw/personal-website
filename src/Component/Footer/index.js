import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaGithubSquare,
    FaWhatsapp,
    FaYoutube
} from 'react-icons/fa'
const Footer = () => {
    return(
        <footer class="page-footer text-center font-small mt-4 container-fluid" style={{color:"black"}} id="contact">

            <div class="pt-4 my-4">
            Find Me On Here : 
            </div>
            {/* <hr class="my-4"/> */}

            <div class="pb-4">
            <a href="https://www.facebook.com/ferdinand.w.ng" target="_blank">
                <FaFacebookF size={30} className="mr-4" style={{color : "black"}}/>
            </a>
            <a href="https://github.com/ferdinandw/" target="_blank">
                <FaGithubSquare size={30}className="mr-4" style={{color : "black"}}/>
            </a>
            </div>
        </footer>
    )
}
export default Footer