const songs = ['royalty', 'on&on', 'cradels', 'fearless', 'mortals', 'army', 'oblivion', 'redemption', 'skyHigh', 'control']

const playButtons = document.querySelectorAll('button')
playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('clicked')
        stopSongs()
        const song = document.getElementById(btn.id.slice(0, -3))
        song.play()
    })
})

function stopSongs() {
    songs.forEach(song => {
        const playingSong = document.getElementById(song)
        playingSong.pause()
    })
}
