let Client = require('../.././app/class/Client');

test('add client', () => {
	let one = new Client(    "Dmitrichenko Evgenii"
							,"+7(921)626-50-51"
							,"123"
						 );
	expect(one.id).toBeDefined();
	expect(one.sName).toBeDefined();
	expect(one.sName).toBe("Dmitrichenko Evgenii");
	expect(one.sPhone).toBe("+7(921)626-50-51");
	expect(one.sNote).toBe("123");
}
/*
test('edit client', () => {
	let myFirstClient = new Client(
							 1
							,"Dmitrichenko Evgenii"
							,"+7(921)626-50-51"
							,"123"
						 );
						 
	
	myFirstClient.setName(123);
	expect(myFirstClient.name).toBe("dsfdsf");
});

test('delete client', () => {
	
	expect(false).toBeTruthy();
});

*/