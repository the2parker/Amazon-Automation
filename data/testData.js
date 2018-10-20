module.exports = [
    {
        testName: 'Batman Search',
        searches: [
            {
                searchTerm: 'Batman Mug',
                itemPicked: 6,
                quantity: 2
            },
            {
                searchTerm: 'Batman Utensils',
                itemPicked: 7,
                quantity: 4
            },
            {
                searchTerm: 'Batman Comic',
                itemPicked: 2,
                quantity: 1
            }
        ]
    },
    {
        testName: 'This shouldn\'t run until the check happens',
        searches: [
            {
                searchTerm: 'NOOOOOOOOOOOOOOOOOO',
                itemPicked: 1,
                quantity: 1
            }
        ]
    }
]