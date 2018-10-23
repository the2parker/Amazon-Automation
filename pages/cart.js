var j

var commands = {
    checkItems: function (items)
    {
        console.log('Checking Items')
        this.api.perform(done =>
        {
            j = items.names.length
            let name = ''
            let amount = ''

            for (let i = 0; i < items.names.length; i++)
            {
                this.api.perform(done =>
                {
                    j--

                    //console.log(items.names)
                    name = items.names[j]
                    //console.log(items.amounts)
                    amount = items.amounts[j]

                    console.log(`Item ${i + 1}: ` + name + ', Quantity: ' + amount)

                    this.verify.containsText(`div[data-item-count = "${i + 1}"] span[class = "a-size-medium sc-product-title a-text-bold"]`, name, 'Name Check')

                    this.getAttribute(`div[data-item-count = "${i + 1}"]`, 'data-quantity', element =>
                    {
                        this.verify.ok(element.value == amount, 'Incorrect Amount: Expected ' + amount, 'Correct Amount')
                    })
                    done()
                })
            }
            done()
        })
    }
}

module.exports = {
    url: 'https://www.amazon.com/gp/cart/view.html?ref=nav_cart',
    elements: {
        firstItem: `div[data-item-count = "1"]`
    },
    commands: [commands]
}