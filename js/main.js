//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=f7LZSY9fVGJCWZ5sPk5p2woAeEc8lLdGXuRaL2Y3&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // Hide H1 on button click
        document.querySelector('h1').setAttribute('style', 'display: none;')

        // Add title, date and explanation to page
        document.querySelector('h2').innerHTML = data.title
        document.querySelector('h3').innerHTML = data.date
        document.querySelector('p').innerHTML = data.explanation

        // On button press, show image/video, description and title.
        document.querySelector('button').addEventListener('click', function(){
          document.querySelector('img').src = '';
          document.querySelector('iframe').src = '';
        })

        
        // Show image or video depending on type
        if (data.media_type === 'image'){
          document.querySelector('img').setAttribute('style', 'display: block;')
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').setAttribute('style', 'display: none;')
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').setAttribute('style', 'display: block;')
          document.querySelector('iframe').src = data.url
          document.querySelector('img').setAttribute('style', 'display: none;')
        }
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      })
}
