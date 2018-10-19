var home
var search
var cart
var item

var items = require('../functions/items')

var data = require('../data/testData')

module.exports = {
    before: browser =>
    {
        home = browser.page.home()
        search = browser.page.search()
        item = browser.page.item()
        cart = browser.page.cart()
    },
    // beforeEach: () =>
    // {
    //     home
    //         .navigate()
    //         .waitForElementPresent('@logo', 5000)
    // },
    'searchTest': browser =>
    {
        data.forEach(test =>
        {
            browser.perform(function (done)
            {
                console.log(`Running Test: ${test.testName}`)
                done()
            })

            items.clear()

            test.searches.forEach(value =>
            {
                home
                    .navigate()
                    .waitForElementPresent('@logo', 5000)
                    .setValue('@searchBar', value.searchTerm)
                    .click('@searchButton')
                search
                    .chooseItem(value.itemPicked)
                item.waitForElementVisible('@itemName', 5000)

                browser.perform(function (done)
                {
                    let bool = item.isBuyable()
                    if (bool)
                    {
                        item.chooseQuantity(value.quantity)
                        item.addToCart()

                        items.addItem(item.getName(), value.quantity)
                    }
                    done()
                })
            });

            cart.navigate()
            cart.waitForElementPresent('@firstItem', 5000)
            cart.checkItems(items)
            //browser.pause(10000)
        });

    },
    after: browser =>
    {
        //browser.end()
    }
}