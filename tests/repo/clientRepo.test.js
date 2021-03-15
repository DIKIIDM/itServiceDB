let ClientRepo = require('../.././app/repo/ClientRepo');

test('get all clients', function() {
	//  1 формирование входных данных
	let repo = new ClientRepo();
	//  2 выполнение функции
	let clients = repo.getAllClients();
	//  3 проверка результата 
	expect(clients.length).toBeGreaterThan(0);
});