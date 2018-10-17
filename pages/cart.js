var commands = {
    checkItems: function (items)
    {
        for (let i = 0; i < items.names.length; i++)
        {
            this.expect(`div[data-item-count = "${i + 1}"] span[class = "a-size-medium sc-product-title a-text-bold"]`).text.to.equal(itmes.names[i])

            this.getAttribute(`div[data-item-count = "${i + 1}]"`, 'data-quantity', value =>
            {
                this.ok(value == items.amounts[i])
            })
        }
    }
}

module.exports = {
    url: 'https://www.amazon.com/gp/cart/view.html?ref=nav_cart',
    elements: {
        firstItem: `div[data-item-count = "1]"`
    },
    commands: [commands]
}