var genreDescriptions = {
    'Rock': 'Rock music is characterized by a strong rhythm, simple melodies, and often poignant lyrics. It has various sub-genres, including classic rock, alternative rock, and punk rock.',
    'Pop': 'Pop music, short for popular music, is characterized by catchy melodies, simple structures, and a focus on accessibility. It often incorporates elements from various genres.',
    'Hip Hop': 'Hip Hop is a genre of music and culture that originated in African American and Latinx communities. It features rap, beatboxing, DJing, and graffiti art.',
};

var genreArtists = {
    'Rock': ['Led Zeppelin', 'Queen', 'The Rolling Stones'],
    'Pop': ['Taylor Swift', 'Ed Sheeran', 'Ariana Grande'],
    'Hip Hop': ['Kendrick Lamar', 'Drake', 'Cardi B'],
};

var genreSongs = {
    'Rock': ['Stairway to Heaven', 'Bohemian Rhapsody', 'Paint It Black'],
    'Pop': ['Shake It Off', 'Shape of You', 'Thank U, Next'],
    'Hip Hop': ['HUMBLE', 'Hotline Bling', 'Bodak Yellow'],
};

function showSection(sectionId) {
    // Hiding the sections
    document.getElementById('sectionAbout').style.display = 'none';
    document.getElementById('sectionGenres').style.display = 'none';
    document.getElementById('sectionArtists').style.display = 'none';
    document.getElementById('sectionSongs').style.display = 'none';

    // Selecting the genre
    var selectedGenre = document.getElementById('removeItem').value;

    // Show the selected section and update content
    if (sectionId === 'Genres') {
        document.getElementById('sectionGenres').style.display = 'block';
        changeGenre(selectedGenre);
    } else if (sectionId === 'Artists') {
        document.getElementById('sectionArtists').style.display = 'block';
        displayArtists(selectedGenre);
    } else if (sectionId === 'Songs') {
        document.getElementById('sectionSongs').style.display = 'block';
        displaySongs(selectedGenre);
    }else if (sectionId === 'About'){
        document.getElementById('sectionAbout').style.display = 'block';
    }
}

    // Allows the user to add a new artist
function addArtist(genre) {
    var newArtist = prompt(`Enter a new artist for ${genre}:`);
    if (newArtist && newArtist.trim() !== '') {
        if (!genreArtists[genre]) {
            genreArtists[genre] = [];
        }
        genreArtists[genre].push(newArtist);
        displayArtists(genre);
    }
}
    // Allows the user to add a new song
function addSong(genre) {
    var newSong = prompt(`Enter a new Song for ${genre}:`);
    if (newSong && newSong.trim() !== '') {
        if (!genreSongs[genre]) {
            genreSongs[genre] = [];
        }
        genreSongs[genre].push(newSong);
        displaySongs(genre);
    }
}

    // Changing the information based on the genre
function changeGenre(genre) {

    // Display the genre description base on the genre selection
    var genreDescription = genreDescriptions[genre];
    var genreDescriptionTextArea = document.getElementById('genreDescription');

    if (!genreDescription) {

        genreDescriptionTextArea.value =  `<p>No description found for ${genre}.Add a description</p>`;
    } else {
        genreDescriptionTextArea.value = genreDescription;
    }

    document.getElementById('genreTitle').innerText = genre;
    document.getElementById('genreContent').innerText = genreDescription;
    
    // Display the songs base on the genre selection
    var SongsTitle = document.getElementById('SongTitle');
    var SongsContent = document.getElementById('SongsContent');

    if (genreSongs[genre] && genreSongs[genre].length > 0) {
        SongsTitle.innerText = `Songs in ${genre}`;
        SongsContent.innerHTML = genreSongs[genre].map(song => `<p>${song}</p>`).join('');
    } else {
        SongsTitle.innerText = 'Top Songs';
        SongsContent.innerHTML = `<p>No Songs found for ${genre}. <a href="javascript:void(0);" onclick="addSong('${genre}')">Add Song?</a></p>`;
    }

   // Display the artists base on the genre selection
    var artistTitle = document.getElementById('artistTitle');
    var artistsContent = document.getElementById('artistsContent');

    if (genreArtists[genre] && genreArtists[genre].length > 0) {
        artistTitle.innerText = `Featured Artists in ${genre}`;
        artistsContent.innerHTML = genreArtists[genre].map(artist => `<p>${artist}</p>`).join('');
    } else {
        artistTitle.innerText = 'Featured Artists';
        artistsContent.innerHTML = `<p>No artists found for ${genre}. <a href="javascript:void(0);" onclick="addArtist('${genre}')">Add artist?</a></p>`;
    }

}

    // Allows the user to update or add a genre description
function updateGenreDescription() {
    var selectedGenre = document.getElementById('removeItem').value;
    var genreDescriptionTextArea = document.getElementById('genreDescription');
    var newDescription = genreDescriptionTextArea.value;

    if (selectedGenre && newDescription.trim() !== '') {
        // Update the description for the selected genre
        genreDescriptions[selectedGenre] = newDescription;
    }

    // Display the updated description
    changeGenre(selectedGenre);
}

    // Allows the user to add a genre
function addGenre() {
    var newGenre = document.getElementById('newItem').value;
    if (newGenre.trim() !== '') {
        var genreItem = document.createElement('li');
        genreItem.innerText = newGenre;
        genreItem.onclick = function() { changeGenre(newGenre); };
        document.getElementById('sidebarList').appendChild(genreItem);

        // Update the remove dropdown with the new genre
        var removeDropdown = document.getElementById('removeItem');
        var option = document.createElement('option');
        option.value = newGenre;
        option.text = newGenre;
        removeDropdown.add(option);
    }
}

    // Allows the user to remove a genre
function removeGenre() {
    var selectedGenre = document.getElementById('removeItem').value;
    var genres = document.getElementById('sidebarList').getElementsByTagName('li');
    for (var i = 0; i < genres.length; i++) {
        if (genres[i].innerText === selectedGenre) {
            genres[i].remove();
            break;
        }
    }

    // Removes the genre from the remove dropdown
    var removeDropdown = document.getElementById('removeItem');
    for (var i = 0; i < removeDropdown.options.length; i++) {
        if (removeDropdown.options[i].value === selectedGenre) {
            removeDropdown.remove(i);
            break;
        }
    }
}

function toggleColorScheme() {
    // Change between dark and light themes
    document.body.classList.toggle('dark-theme');
}
document.querySelector('header').addEventListener('mouseover', function() {
    alert('Welcome to the Music World!');
});