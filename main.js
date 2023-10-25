const songs = document.querySelectorAll('audio')
const playButtons = document.querySelectorAll('main button i')
const duration = document.querySelectorAll('.audio-length')
const toolbarBtns = document.querySelectorAll('.toolbar button')
const progressBar = document.querySelector('.progress-bar')
const pauseItBtn = document.querySelector('#pause-it').firstElementChild
const log = console.log
let playingSong;
let playingSongIndex = 0;
duration.forEach((songDuration, i) => {
    songDuration.innerText = (songs[i].duration / 60).toFixed(2) + 'min'
})



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
            playingSong = song
            playingSong.addEventListener('timeupdate', () => {
                progressBar.value = (playingSong.currentTime / playingSong.duration) * 100
            })
            pauseItBtn.classList.remove('fa-play')
            pauseItBtn.classList.add('fa-pause')

            btn.classList.remove('fa-play');
            btn.classList.add('fa-pause')
        }
        else if (e.target.classList.contains('fa-pause')) {
            const song = document.getElementById(btn.parentElement.id.slice(0, -3))
            song.pause()
            pauseItBtn.classList.remove('fa-pause')
            pauseItBtn.classList.add('fa-play')
            btn.classList.add('fa-play');
            btn.classList.remove('fa-pause')
        }


    })
})


toolbarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch (btn.id) {
            case 'play-prev':
                break;
            case 'pause-it':
                if (btn.firstElementChild.classList.contains('fa-pause')) {
                    playingSong.pause()
                    pauseItBtn.remove('fa-pause')
                    pauseItBtn.add('fa-play')
                }
                else {
                    playingSong.play()
                    pauseItBtn.remove('fa-play')
                    pauseItBtn.add('fa-pause')
                }
                break;
            case 'play-next':
                console.log('play-next')
        }
    })
})

