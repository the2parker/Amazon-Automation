var names = []
var amounts = []

module.exports = {
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
            names.push(name)
            amounts.push(amount)
        }

    },
    returnInfo: function (callback) 
    {
        callback({ names, amounts })
    }
}
