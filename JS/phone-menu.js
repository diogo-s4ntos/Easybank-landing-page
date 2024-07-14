document.getElementById('phone-menu-button').addEventListener('change', () => {
    if(document.getElementById('phone-menu-button').checked == true) {
        document.body.style.overflow = 'hidden'
        document.getElementById('phone-menu').style.transform = 'translateX(0%)'
    } else {
        document.body.style.overflow = 'scroll'
        document.getElementById('phone-menu').style.transform = 'translateX(100%)'
    }
})