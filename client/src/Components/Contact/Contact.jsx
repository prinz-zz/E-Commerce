import './contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

export default function Contact() {
    return (
        <div className="contact">
            <div className="wrapper">
                <div className="left">BE IN TOUCH WItH US:</div>
                <div className="center">
                    <input type="text" placeholder='Enter your e-mail...' />
                    <button>Join us</button>
                </div>
                <div className="right">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                    <GoogleIcon/>
                </div>
            </div>
        </div>
    )
}