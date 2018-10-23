module.exports = [
    {
        testName: 'Normal Search Test',
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
        testName: 'Repeat Item Test',
        searches: [
            {
                searchTerm: 'Sherlock Holmes Book',
                itemPicked: 3,
                quantity: 2
            },
            {
                searchTerm: 'Sherlock Holmes Mug',
                itemPicked: 4,
                quantity: 3
            },
            {
                searchTerm: 'Sherlock Holmes Book',
                itemPicked: 3,
                quantity: 1
            },
            {
                searchTerm: 'Sherlock Holmes Hat',
                itemPicked: 4,
                quantity: 4
            }
        ]
    },
    // {
    //     testName: 'Multiple Repeat Added Items Test',
    //     searches: [
    //         {
    //             searchTerm: 'Superman Mug',
    //             itemPicked: 7,
    //             quantity: 3
    //         },
    //         {
    //             searchTerm: 'Superman Cape',
    //             itemPicked: 7,
    //             quantity: 1
    //         },
    //         {
    //             searchTerm: 'Superman Mug',
    //             itemPicked: 7,
    //             quantity: 2
    //         },
    //         {
    //             searchTerm: 'Superman Cape',
    //             itemPicked: 7,
    //             quantity: 4
    //         },
    //         {
    //             searchTerm: 'Superman Mug',
    //             itemPicked: 7,
    //             quantity: 3
    //         }
    //     ]
    // }
]

//this is so you can easily copy the format for new tests
// {
//     testName: '',
//     searches: [
//         {
//             searchTerm: '',
//             itemPicked: 1,
//             quantity: 1
//         },

//     ]
// }