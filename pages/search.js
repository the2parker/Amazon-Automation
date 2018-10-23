var commands = {
    chooseItem: function(itemNumber) {
        this.api.waitForElementPresent(`#result_${itemNumber - 1} img`, 5000)
        this
            .click(`#result_${itemNumber - 1} img`)
    }

}

module.exports = {
    commands: [commands],
    elements: {
        'logo': '#nav-logo',
        'searchBar': '#twotabsearchtextbox',
        'searchButton': 'input[value="Go"]',
        'item1': '#result_0 img',
        'item2': '#result_1 img',
        'item3': '#result_2 img',
        'item4': '#result_3 img',
        'item5': '#result_4 img'
    }
}