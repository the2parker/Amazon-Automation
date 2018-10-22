var home
var search
var cart
var item

var items = {
    names: [],
    amounts: [],
    addItem: function (browser, name, amount) //this is the command to add a new item
    {
        // browser.perform(function (done)
        // {
        let alreadyAdded = false
        for (let i = 0; names.length > i; i++) //this loops through and see if there is a repeated item
        {
            if (names[i] == name) // and if there is it adds the amount for the current itemt to that
            {
                amounts[i] += amount
                alreadyAdded = true
                break
            }
        }

        if (!alreadyAdded)
        {
            console.log('Added a new item')
            names.push(name)
            amounts.push(amount)
        }

    },
    clear: function () //this is to clear the values for when a new test starts
    {
        names = []
        amounts = []
    }
}

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
                                items.addItem(browser, itemName, amount) //problem function
                                console.log('Names: ' + items.names)
                                console.log('Amounts: ' + items.amounts)
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