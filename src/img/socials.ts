import iconFacebook from './icons8-facebook.svg'
import iconTwitter from './icons8-twitter.svg'
import iconVk from './icons8-vk.svg'
import iconTelegramm from './icons8-telegramm-app.svg'
import iconWhatsapp from './icons8-whatsapp.svg'

const arrayIcons = [
    { icon: iconFacebook, name: 'Facebook' },
    { icon: iconTwitter, name: 'Twitter' },
    { icon: iconVk, name: 'Vk' },
    { icon: iconTelegramm, name: 'Telegram' },
    { icon: iconWhatsapp, name: 'Whatsapp' },
];




const iconByLinkName = {
    Vk: iconVk,
    Facebook: iconFacebook,
    Telegram: iconTelegramm,
    Whatsapp: iconWhatsapp,
    Twitter: iconTwitter,
}

export default iconByLinkName;