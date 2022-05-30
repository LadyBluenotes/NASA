//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=f7LZSY9fVGJCWZ5sPk5p2woAeEc8lLdGXuRaL2Y3&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // If image or video for data type.
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        
        // On button press, show image/video, description and title and then hide h1.
        document.querySelector('button').addEventListener('click', function(){
          document.querySelector('img').src = '';
          document.querySelector('iframe').src = '';
          document.querySelector('h1').setAttribute('style', 'display: none;')
        }
      )
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

