// on switchs for javascript you can run more than one line for a case
// as long as they align correctly in the code

// also you can return early in a switch case, if you do, you don't need the break
const number = 3; // change with 1, 2 and 3 to test

switch (number) {
	case 1:
		console.log('the number')
    console.log('is')
    return 'returned early'
    console.log('1')
		break;
	case 2:
    console.log('the number')
    console.log('is')
    console.log('2')
		break;
	default:
		console.log('i only count until 2')
    return
    console.log('something default')
		break;
};
