const userInfo = {
    userInfoPanel(username, fullName, bio, avatar, repositories) {
        return (
            ` <div class="results" id="results">
                <div class="userHeader">
                    <img class="avatar" src="${avatar}"></img>
                    <div class="userMainInfo">
                        <h4 class="userName">@${username}</h4>
                        <h1 class="fullName">${fullName ? fullName : ''}</h1>
                        <p class="bio" >${bio ? bio : ''}</p>
                    </div>
                </div>
                <div>
                    <h2 class="reposHeader">Repositories</h2>
                    <ul class="repos">
                        ${repositories.map(repo => `<li class="repo">
                                                        <p class="repoTitle">${repo.name}</p>
                                                        <div class="repoStats">
                                                            <div class="repoStat">
                                                                <img src="../src/files/images/star-icon.svg"/>
                                                                <span class="repoStar">${repo.stars}</span>
                                                            </div>
                                                            <div class="repoStat">
                                                                <img src="../src/files/images/fork-icon.png"/>
                                                                <span class="repoFork">${repo.forks}</span>
                                                            </div>
                                                        </div>
                                                    </li>`).join('')}
                    </ul>
                </div>
            </div>`
        )
    }
}

export default userInfo;


//method1

// userInfoPanel(username, fullName, bio, avatar, repositories) {
//     let container = document.createElement('div');
//     container.setAttribute("id", "results")
//     let reposList = document.createElement("UL");

//     container.appendChild(reposList);

//     for (let i=0; i<repositories.length; i++) {

//         let repo = document.createElement("LI");

//         let repoName = document.createElement("H3");
//         repoName.innerText=`${repositories[i].name}`;
//         let repoStars = document.createElement("P");
//         repoStars.innerText=`${repositories[i].stars}`;
//         let repoForks = document.createElement("P");
//         repoForks.innerText=`${repositories[i].forks}`

//         reposList.appendChild(repo);
//         repo.appendChild(repoName);
//         repo.appendChild(repoStars);
//         repo.appendChild(repoForks);

//     }

//     let avatarImg = document.createElement('img');
//     avatarImg.src=avatar;
//     let usernameTitle = document.createElement('h3');
//     usernameTitle.innerText=username;
//     let fullNameTitle = document.createElement('h2');
//     fullNameTitle.innerText=fullName;
//     let bioText = document.createElement('p');
//     bioText.innerText=bio;

//     container.appendChild(avatarImg);
//     container.appendChild(usernameTitle);
//     container.appendChild(fullNameTitle);
//     container.appendChild(bioText);
//     container.appendChild(reposList);

//     return container;

// }