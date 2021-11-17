const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const videoPlayers = document.querySelectorAll('.video-player')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    videoPlayers.forEach(videoPlayer => {
        videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    })
})

window.addEventListener('keydown', (event) => {
    if(event.key == 'Escape') {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
        videoPlayers.forEach(videoPlayer => {
            videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        })
    }
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
        videoPlayers.forEach(videoPlayer => {
            videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        })
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}



const videos = {
    ctaVideo: 'https://www.youtube.com/embed/lSkiUA6WCAE',
    ctaVideo2: 'https://www.youtube.com/embed/71FDrI4DJfM',
    testvid: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
    testvid2: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C0DPdy98e4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
