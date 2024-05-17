// Helper functions to generate random values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElement(arr) {
    return arr[getRandomInt(0, arr.length)];
}

function generateRandomName() {
    const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie", "Michael", "Laura", "David", "Sophie", "Warnakulasuriya", "Patabendige", "Ushantha", "Joseph", "Chaminda", "Vaas"];
    const lastNames = ["Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Johnson", "Davies", "Evans", "Thomas"];
    return `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
}

function generateRandomEmail(name) {
    const domains = ["hotmail.com", "gmail.com", "test.org", "yahoo.net"];
    const email = `${name.replace(/ /g, "").toLowerCase()}${getRandomInt(1, 1000)}@${getRandomElement(domains)}`;
    return email;
}

function generateRandomAustralianPhoneNumber() {
     const prefix = "4";
     const number = Array.from({length: 8}, () => getRandomInt(0, 10)).join('');
     return `${prefix}${number}`;
}

function generateRandomAustralianPostcode() {
    return getRandomInt(2000, 9999);
}

function selectRandomCheckboxes() {
    const checkboxContainers = document.querySelectorAll('.checkbox-container');

    checkboxContainers.forEach(container => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        const randomIndex = Math.floor(Math.random() * checkboxes.length);
        checkboxes[randomIndex].checked = true;
         ("called");
    });
}
function selectRandomCheckboxes() {
    const checkboxContainers = document.querySelectorAll('.checkbox-container');

    checkboxContainers.forEach(container => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        const randomIndex = Math.floor(Math.random() * checkboxes.length);
        checkboxes[randomIndex].checked = true;
         ("called");
    });
}

