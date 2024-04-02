import React from 'react';
import {
   ShareTelegram,
   ShareWatsUp,
   shareFb,
   shareIcon,
   shareLinkedin,
   shareTwiter,
   shareViber,
} from '../../iconFolder/icon';
import {
   FacebookShareButton,
   TwitterShareButton,
   LinkedinShareButton,
   TelegramShareButton,
   InstapaperShareButton,
   WhatsappShareButton,
   ViberShareButton,
} from 'react-share';
import './ShareComponents.css';

function ShareComponent(url) {
   return (
      <div className="share_div" onClick={(e) => e.stopPropagation()}>
         <span>{shareIcon}</span>
         <div className="share-buttons">
            <FacebookShareButton url={url.url} quote={''} >
               <span >{shareFb} Facebook</span>
            </FacebookShareButton>

            <TwitterShareButton url={url.url} title={''}>
               <span>{shareTwiter} Twitter</span>
            </TwitterShareButton>

            <LinkedinShareButton url={url.url} title={''}>
               <span>{shareLinkedin} LinkedIn</span>
            </LinkedinShareButton>

            <TelegramShareButton url={url.url} title={''}>
               <span>{ShareTelegram} Telegram</span>
            </TelegramShareButton>

            <WhatsappShareButton url={url.url} title={''}>
               <span>{ShareWatsUp} WhatsUp</span>
            </WhatsappShareButton>

            <ViberShareButton url={url.url} title={''}>
               <span>{shareViber} Viber</span>
            </ViberShareButton>
         </div>
      </div>
   );
}

export default ShareComponent;
