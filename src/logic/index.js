const logic = {

    gitHubApiUrl: 'https://api.github.com',

    RetrieveUser(username) {
        const usernameString = username.toString();
        return fetch(`${this.gitHubApiUrl}/users/${usernameString}`)
            .then(response => response.json())
            .then(response => {
                return {
                    repos_url: response.repos_url,
                    login: response.login,
                    name: response.name,
                    avatar_url: response.avatar_url,
                    bio: response.bio
                }
            })
    },


    RetrieveRepos(url) {
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                response = response.map(function(repo){
                    return {
                        name: repo.name,
                        stars: repo.stargazers_count,
                        forks: repo.forks_count
                    }
                })
                return response;
            })
    }
}

export default logic;