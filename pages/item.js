var commands = {
    chooseQuantity: function (amount, callback)
    {
        let addedAmount = amount

        this.api.elements('css selector', `#quantity option[value = "${addedAmount}"]`, result =>
        {
            if (result.value.length > 0)
            {
                this.click(`#quantity option[value = "${addedAmount}"]`)
                callback(addedAmount)
            }
            else
            {
                callback(1)
            }
        })
    },
    isBuyable: function (complete)
    {
        var bool = true

        //this.api.pause(10000)
        this.api.perform(function (done)
        {
            this.api.elements('css selector', 'span[class = "a-size-small a-text-bold"]', result =>
            {
                if (result.value.length > 0)
                {
                    this.api.elementIdText(result.value[0].ELEMENT, element =>
                    {
                        if (element.value == "Exclusively for Prime members")
                        {
                            console.log("Item is for Prime Members only")
                            bool = false
                            // return false
                        }
                    })
                }
            })
            this.api.elements('css selector', 'span[class = "a-color-price a-text-bold"]', result =>
            {
                if (result.value.length > 0)
                {
                    this.api.elementIdText(result.value[0].ELEMENT, element =>
                    {
                        if (element.value == "Currently unavailable.")
                        {
                            console.log("Item is not available")
                            bool = false
                            // return false
                        }
                    })
                }
            })
            done()
        })
        this.api.perform(function ()
        {
            complete(bool)
        })
        // return true
    },
    addToCart: function ()
    {
        this.click('#add-to-cart-button')
    },
    getName: function (complete)
    {
        this.api.perform(done =>
        {
            this.api.elements('css selector', '#productTitle', result =>
            {
                this.api.elementIdText(result.value[0].ELEMENT, element =>
                {
                    complete(element.value)
                })
            })
            done()
        })
    }
}

module.exports = {
    commands: [commands],
    elements: {
        'itemName': '#productTitle',

    }
}