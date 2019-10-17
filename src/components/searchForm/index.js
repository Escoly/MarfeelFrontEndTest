
const searchForm = {
    html: () => {
        return (
            `<div>
                <form class="searchForm" id="searchForm">
                    <input class="searchInput" type="text" id="searchInput" placeholder="Search username...">
                    <button class="searchButton" type="submit" form="searchForm" id="searchButton">Search</button>
                </form>
            </div>`
        )
    }

}

export default searchForm