const usernameInput = document.getElementById("username");
const fetchProfile = document.getElementById("fetchProfile");

fetchProfile.addEventListener("click" , function(){
    const username =  usernameInput.value.trim();
    if(username){
        fetchGitHubProfile(username);
    }
})

function fetchGitHubProfile(username){
    const requestUrl = `https://api.github.com/users/${username}`;

let data = null;
 const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        if(xhr.readyState === 4){
            data = JSON.parse(this.responseText);
            console.log(xhr.readyState)
            document.querySelector(".card img").setAttribute("src" , `${data.avatar_url}`);
            document.querySelector("h4").innerHTML = `${data.name} |  Followers : ${data.followers}`;
            document.querySelector("h4").style.fontWeight = `bold`;
            document.querySelector("p").innerHTML = `${data.bio}  ${data.blog}`

        }
    }
    xhr.send()

}
