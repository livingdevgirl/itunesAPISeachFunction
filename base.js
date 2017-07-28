/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let searchbar = document.getElementById('seachbar')

// 2. Create your `submit` event for getting the user's search term

let searchMusic = document.getElementById('submit').addEventListener('click', function(){
// 3. Create your `fetch` request that is called after a submission
 let term = searchbar.value;
  fetch(`https://itunes.apple.com/search?term=${searchbar.value}`).then(function(response){
    response.json().then(function(data){
  for (var i = 0; i < 25; i++) {
  console.log(data);

  }



    });
  });

});




// let entity="allArtist&attribute=allArtistTerm"
//
// audio.setAttribute('src', "https://.../search?parameterkeyvalue&callback="{selectSong}"")
//
// fetch https://itunes.apple.com/search?=term&country&callback
//
// fetch(`https://itunes.apple.com/search?term=${searchbar.value}`)
//   .then(function(response) {
//         console.log(data)
//   })
// audio.setAttribute('src', "https://.../search?parameterkeyvalue&callback="{selectSong}"")
//
// });
//https://itunes.apple.com/search?term=jack+johnson

// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
