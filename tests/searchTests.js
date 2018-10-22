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
                let bool = false
                browser.perform(function (done)
                {
                    console.log(`Checking on ${value.searchTerm}`)
                    item.isBuyable(function (result)
                    {
                        console.log(result)
                        bool = result
                        done()
                    })
                })
                browser.perform(function (done)
                {
                    console.log(`Bool is ${bool}`)
                    let itemName = item.getName()
                    if (bool)
                    {
                        item.chooseQuantity(value.quantity, amount =>
                        {
                            items.addItem(browser, itemName, amount)
                            console.log(items.names)
                        })

                        item.addToCart()

                    }
                    done()
                })
            });

            cart.navigate()
            cart.waitForElementPresent('@firstItem', 5000)
            browser.perform(done =>
            {
                cart.checkItems(items)
                done()
            })
            browser.pause(100000)
        });

    },
    after: browser =>
    {
        browser.end()
    }
}