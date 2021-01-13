import React from 'react'
import './SocialConnect.css'

const SocialConnect = () => {
    return (
        <div>
            <div class="about">
                <a class="bg_links social instagram" href="https://www.instagram.com/khomohzie/" target="_blank" rel="noreferrer">
                    <span class="icon"><i class="fa fa-instagram"></i></span>
                </a>
                <a class="bg_links social telegram" href="https://twitter.com/khomohzie/" target="_blank" rel="noreferrer">
                    <span class="icon"><i class="fa fa-twitter"></i></span>
                </a>
                <a class="bg_links social github" href="https://www.github.com/khomohzie/" target="_blank" rel="noreferrer">
                    <span class="icon"><i class="fa fa-github"></i></span>
                </a>
                <a class="bg_links logo"></a>
            </div>
        </div>
    )
}

export default SocialConnect
