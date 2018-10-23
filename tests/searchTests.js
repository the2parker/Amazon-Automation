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
    'searchTest': browser =>
    {
        data.forEach(test =>
        {
            browser.perform(function (done)
            {
                console.log(`Running Test: ${test.testName}`)
                done()
            })

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
                    console.log(`Searching for ${value.searchTerm}`)
                    item.isBuyable(function (result)
                    {
                        bool = result
                        done()
                    })
                })

                browser.perform(function (done)
                {
                    item.getName(itemName =>
                    {
                        if (bool)
                        {
                            item.chooseQuantity(value.quantity, amount =>
                            {
                                console.log('Adding item: ' + itemName)
                                console.log('Item Quantity: ' + amount)
                                items.addItem(browser, itemName, amount)
                            })

                            item.addToCart()

                        }
                    })

                    done()
                })
            });

            cart.navigate()
            cart.waitForElementPresent('@firstItem', 5000)
            browser.perform(done =>
            {
                items.returnInfo(values =>
                {
                    cart.checkItems(values)
                })
                done()
            })
        });

    },
    after: browser =>
    {
        //browser.end()
    }
}