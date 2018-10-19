var commands = {
    chooseQuantity: function (amount)
    {
        // this.api.pause(900000)
        this
            .click('#quantity')
            .click(`#quantity option[value = "${amount}"]`)
    },
    isBuyable: function ()
    {
        var bool = true

        this.api.waitForElementVisible('span[class = "a-size-small a-text-bold"]', 5000, true)
        //this.api.pause(10000)

        this.api.elements('css selector', 'span[class = "a-size-small a-text-bold"]', result =>
        {
            console.log("found element" + result)
            this.api.elementIdText(result.value[0].ELEMENT, element =>
            {
                console.log(element)
                if (element.value == "Exclusively for Prime members")
                {
                    console.log("is not buyable")
                    return false
                }
            })
        })
        console.log(true)
        return true
    },
    addToCart: function ()
    {
        this.click('#add-to-cart-button')
    },
    getName: function ()
    {
        this.api.element().getText('@itemName', function (value)
        {
            return value
        })
    }
}

module.exports = {
    commands: [commands],
    elements: {
        'itemName': '#productTitle',

    }
}