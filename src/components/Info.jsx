import React from 'react'
import profilePhoto from '../images/simbab.png'

export default function Info() {
    const profileName = 'Simba Blessed Mahlaulo';
    const profileRole = 'Frontend Developer';
    const profileWebsite = 'simbablessed.dev';

    return (
        <div>
            <div className="card__img-wrapper">
                <img src={profilePhoto} alt={`Profile picture of ${profileName}`} />
            </div>

            <div className="card__info">
                <h1>{profileName}</h1>
                <p className='card__info-role'>{profileRole}</p>
                <p className='card__info-website'>{profileWebsite}</p>

                <div className="card__btn-wrapper">
                    <a href="mailto:itssiemba@outlook.com">
                    <button className='email-btn'>
                        <i class="fas fa-envelope"></i> Email
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/siemba/">
                    <button className='linkedin-btn'>
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}