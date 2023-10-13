const songs = document.querySelectorAll('audio')
const playButtons = document.querySelectorAll('button')
// const pauseButtons = document.querySelectorAll('pauseBtn')
const log = console.log

function stopSongs() {
    songs.forEach(song => {
        song.pause()
    })
}

playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        stopSongs()
        const song = document.getElementById(btn.id.slice(0, -3))
        log(btn.classList.contains('fa-play'))
        song.play()
        e.target.classList.toggle('fa-play')
        e.target.classList.toggle('fa-pause')

    })
})


// pauseButtons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log('clicked')

//         stopSongs()
//     })
// })

