import logic from './logic';
import userInfo from './components/userInfo'
import searchForm from './components/searchForm'
import errorMessage from './components/errorMessage'
import './sass/style.sass'

const mainContainer = document.getElementById("mainContainer")
const searchFormTemplate = searchForm.html()
mainContainer.innerHTML += searchFormTemplate
const errorTemplate = errorMessage.template();
mainContainer.innerHTML += errorTemplate;

let searchFormElement = document.getElementById("searchForm")
searchFormElement.addEventListener("submit", function (event) {
    event.preventDefault();
    showErrorMessage(false)
    searchUser();
})

function searchUser() {
    if (document.getElementById("results")) {
        const results = document.getElementById("results")
        results.parentNode.removeChild(results)
    }
    const username = document.getElementById("searchInput").value
    logic.RetrieveUser(username)
        .then(response => {
            if (response.login == undefined) {
                showErrorMessage(true);
            } else {
                userReposRetriever(response);
            }
        })
}

function userReposRetriever(userData) {
    const { login, name, avatar_url, bio } = userData;
    let repositories = []
    logic.RetrieveRepos(userData.repos_url)
        .then(response => {
            repositories = response;
            const userResult = userInfo.userInfoPanel(login, name, bio, avatar_url, repositories);
            mainContainer.insertAdjacentHTML('beforeEnd', userResult)
        })
}

function showErrorMessage(state) {
    if (state) {
        document.getElementById("errorMessage").className = "errorMessage";
    } else {
        document.getElementById("errorMessage").className = "errorMessageHidden";
    }
}








