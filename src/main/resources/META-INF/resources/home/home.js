fetch("http://localhost:8080/tweet")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.map(element => createTweet(element))
  })
  .catch(error => {
    console.error('Error:', error);
  });


function createTweet(data){
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('avatar');

    const avatarImg = document.createElement('img');
    avatarImg.src = 'https://as1.ftcdn.net/v2/jpg/05/10/54/18/1000_F_510541840_g20yMpL88D0qfBHSgtuUDueBn4tyDsXp.jpg';
    avatarImg.alt = 'Avatar';

    avatarDiv.appendChild(avatarImg);
    tweetDiv.appendChild(avatarDiv);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('tweet-content');

    const usernameDiv = document.createElement('div');
    usernameDiv.classList.add('username');
    usernameDiv.textContent = data.usuario.nombre;

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.textContent = data.texto;

    const fechaDiv = document.createElement('div');
    fechaDiv.classList.add('text');
    fechaDiv.textContent = data.fecha;

    contentDiv.appendChild(usernameDiv);
    contentDiv.appendChild(textDiv);
    tweetDiv.appendChild(contentDiv);
    contentDiv.appendChild(fechaDiv);



    divTweet = document.getElementById("container");
    divTweet.appendChild(tweetDiv);
}


function redirect(){
    window.location = "../tweet/tweet.html"
}