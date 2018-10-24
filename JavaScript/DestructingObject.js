const personalInformation = {
    firstName: 'Saloni',
    lastName: 'Gupta',
    city: 'Delhi',
    state: 'Delhi',
    zipCode: 110093
}

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);