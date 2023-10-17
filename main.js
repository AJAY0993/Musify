const songs = document.querySelectorAll('audio')
const playButtons = document.querySelectorAll('button i')
// const pauseButtons = document.querySelectorAll('pauseBtn')
const log = console.log

function stopSongs() {
    songs.forEach(song => {
        playButtons.forEach(btn => {
            btn.classList.add('fa-play');
            btn.classList.remove('fa-pause')
        })
        song.pause()
    })
}

playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-play')) {
            stopSongs()
            const song = document.getElementById(btn.parentElement.id.slice(0, -3))
            song.play()
            btn.classList.remove('fa-play');
            btn.classList.add('fa-pause')
        }
        else if (e.target.classList.contains('fa-pause')) {
            const song = document.getElementById(btn.parentElement.id.slice(0, -3))
            song.pause()
            btn.classList.add('fa-play');
            btn.classList.remove('fa-pause')
        }


    })
})



