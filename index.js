var customerName = 'bob';
function customerName() {
    return 'bob';
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return 'BOB'
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}


const leastFavoriteCustomer = 'maybe not bob'; //global scope declation
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'that is bob' //attempt to make a new reassignmemt
}
