const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({addComponents, theme}){
    addComponents({
        ".icon":{
            backgroundRepeat: 'no_repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            "&_github":{
                backgroundImage: theme('backgroundImage.github')
            },
            "&_instagram":{
                backgroundImage: theme('backgroundImage.instagram')
            },   
            "&_gmail":{
                backgroundImage: theme('backgroundImage.gmail')
            }
        }
    })
})