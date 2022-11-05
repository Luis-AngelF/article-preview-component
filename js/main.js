function toggleShareView() {
    
    const cardBottom = document.querySelector('.card-bottom')
    const profile = document.querySelector('.author-details')
    const share = document.querySelector('.card-share')

    cardBottom.classList.toggle('active')
    profile.classList.toggle('hidden')
    share.classList.toggle('hidden')
}