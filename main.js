let profileContainer = document.querySelector('#profileContainer');
console.log(profileContainer);
let upperBox = document.querySelector('.upperBox');
let middleBox = document.querySelector('.middleBox');
let lowerBox = document.querySelector('.lowerBox');

let gitProfile = "https://api.github.com/users/SLehew"
let repoUrl = "https://api.github.com/users/SLehew/repos"

fetch(gitProfile, {
    method: "GET",
    headers: {"Content-Type": "application/json"},

})

.then((response) => {
    return response.json();
})
.then((parsedResponse) => {
    let gitData = parsedResponse;
    //adds avatar
    let gitAvatar = document.createElement('img');
    gitAvatar.src = gitData.avatar_url;
    upperBox.appendChild(gitAvatar);

    //adds users name
    let gitName = document.createElement("h1");
    gitName.innerText = `${gitData.name}`;
    upperBox.appendChild(gitName);

    //add location
    let gitLocation = document.createElement("h3");
    gitLocation.innerText = `Location: ${gitData.location}`;
    middleBox.appendChild(gitLocation);

    ///add url
    let urlContainer = document.createElement("h3");
    middleBox.appendChild(urlContainer)
    urlContainer.classList.add("urlText")
    urlContainer.innerText = "GitHub URL:"
    
    let gitUrl = document.createElement("a");
    gitUrl.href = gitData.html_url
    gitUrl.innerText = `${gitData.html_url}`;
    gitUrl.classList.add('gitUrl');
    urlContainer.appendChild(gitUrl);

    //add username
    let gitUserName = document.createElement("h3");
    gitUserName.innerText = `GitHub username: ${gitData.login}`;
    middleBox.appendChild(gitUserName);

    return gitData;
    }
)

fetch(repoUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json"},

})

.then((response) => {
    return response.json();
})
.then((parsedResponse) => {
    let gitRepo = parsedResponse;
    for (let repo of gitRepo) {
        let repoEl = document.createElement("a");
        repoEl.href = repo.html_url;
        repoEl.innerText = repo.name;
        repoEl.classList.add('repoItem');
        lowerBox.appendChild(repoEl);
    
    
    
    
    }

return gitRepo
})    