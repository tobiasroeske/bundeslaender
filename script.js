
let filterChars = [];
let filteredStates = [];

function init() {
    renderStates(statesJson);
    getFilters();
    renderFilters();
}

function renderStates(array) {
    let container = document.getElementById('bundeslaenderContainer');
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let state = array[i];
        container.innerHTML += /*html*/`
            <div class="land-container" id="${state['name'].toLowerCase()}">
                <a href="${state['url']}" class="link" target="_blank">
                    <h2>${state['name']}</h2>
                    <span>${state['population']} Millionen</span>
                </a>    
            </div>
        `
    }
}

function getFilters() {
    for (let i = 0; i < statesJson.length; i++) {
        let state = statesJson[i];
        let firstChar = state['name'].charAt(0);
        if (filterChars.indexOf(firstChar) == - 1) {
            filterChars.push(firstChar);
        }
    }
}

function sortByName(array) {
    return array.sort();
}

function renderFilters() {
    let filterContainer = document.getElementById('filterContainer');
    filterContainer.innerHTML = '';
    let filters = sortByName(filterChars);
    for (let i = 0; i < filters.length; i++) {
        let filterChar = filters[i];
        filterContainer.innerHTML += /*html*/`
            <button class="btn btn-light" id="filter${filterChar}" onclick="renderFilteredStates('${filterChar}')">${filterChar}</button>
        `
    }
    filterContainer.innerHTML += /*html*/`
        <button class="btn btn-light" onclick=init()>Alle</button>
    `
}

function getFilteredStates(firstChar) {
    for (let i = 0; i < statesJson.length; i++) {
        const state = statesJson[i];
        if (state['name'].charAt(0) == firstChar) {
            filteredStates.push(state);
        }
    }
}

function renderFilteredStates(firstChar){
    getFilteredStates(firstChar);
    renderStates(filteredStates);
    filteredStates = [];
} 

