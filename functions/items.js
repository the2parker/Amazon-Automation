module.exports = {
    names: [],
    amounts: [],
    addItem: function (name, amount)
    {
        let alreadyAdded = false
        for (let i = 0; names.length > i; i++)
        {
            if (names[i] == name)
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
    clear: function ()
    {
        names = []
        amounts = []
    }
}