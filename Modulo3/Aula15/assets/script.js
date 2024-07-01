function requisitar(url) {
    fetch(url).then(response => response.text()).then(data => {
        document.getElementById('content').innerHTML = data
    })


}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('btn-outline-dark')
            btn.style.backgroundColor = ''
            btn.style.color = 'white'
        })
        btn.style.backgroundColor = 'antiquewhite'
        btn.style.color = 'black'
        btn.style.border = 'none'
    })
})