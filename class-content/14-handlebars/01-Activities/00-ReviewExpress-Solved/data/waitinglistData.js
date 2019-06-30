// ===============================================================================
// DATA
// Below data will hold all of the backorders.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var waitlistData = [
    {
    customerName: "anthony",
    customerEmail: "a@gmail.com",
    customerOrder: "Sticky buns",
    customerID: 1
    }
];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitlistData;
