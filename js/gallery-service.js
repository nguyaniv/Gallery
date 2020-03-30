var id = 0
var projects = ['MineSweeper', 'bookShop', 'pacman']
var descriptions = [
    'Online Minesweeper in JavaScript. Play the classic game in Beginner, Intermediate, and Expert modes.', 
    'Because the traditional bookstore outlets, whether or storage space is limited, often under pressure to cost only the best-selling book called for the sale of the main, for the special needs of readers or a more popular books are unable to take into account. But digital technology has brought the solution to this troubled approach to current technology, only very little space to store large amounts of data and be able to quickly find the information they need, but also long-term preservation, changes also very easy, of course, books can provide readers with a variety of consulting needs.',
    'play Classic Pacman that was made only by pure JS. '
]




var newProjects = projects.map(function (pro) {
    return pro = {
        id: ++id,
        name: pro,
        image: id + '.PNG',
        description: descriptions[id-1]
        
    }
})






