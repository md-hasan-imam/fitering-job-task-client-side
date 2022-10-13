import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/finalLogo.png"
import SocialIcons from './SocialIcons';

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 py-16 text-secondary">
                <div className=''>
                    <img src={logo} alt="" className='mb-5' />
                    <p className=''>MedicPro private ltd<br /> Providing reliable services since 1992</p>
                    <SocialIcons></SocialIcons>
                </div>
                <div>
                    <span className="footer-title text-lg text-secondary mb-3 opacity-100">Services</span>
                    <Link to='' className="link link-hover font-semibold">Branding</Link>
                    <Link to='' className="link link-hover font-semibold">Design</Link>
                    <Link to='' className="link link-hover font-semibold">Marketing</Link>
                    <Link to='' className="link link-hover font-semibold">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-lg text-secondary mb-3 opacity-100">Company</span>
                    <Link to='' className="link link-hover font-semibold">About us</Link>
                    <Link to='' className="link link-hover font-semibold">Contact</Link>
                    <Link to='' className="link link-hover font-semibold">Jobs</Link>
                    <Link to='' className="link link-hover font-semibold">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-lg text-secondary mb-3 opacity-100">Legal</span>
                    <Link to='' className="link link-hover font-semibold">Terms of use</Link>
                    <Link to='' className="link link-hover font-semibold">Privacy policy</Link>
                    <Link to='' className="link link-hover font-semibold">Cookie policy</Link>
                </div>
            </div>

            <div className="footer max-w-full footer-center pb-10 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;