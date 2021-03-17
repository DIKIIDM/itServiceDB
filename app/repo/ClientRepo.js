let Client = require('../.././app/class/Client');

class ClientRepo {
	constructor() {
	
	}
	//-----------------------------------------------------------
	getAllClientsFromDB() {
		return [
			new Client(
					 1
					,"Dmitrichenko Evgenii"
					,"+7(921)626-50-51"
					,"123"
				 )
			,new Client(
					 2
					,"Dmitrichenko Evgenii"
					,"+7(921)626-50-51"
					,"123"
				 )
		];
	}
	//-----------------------------------------------------------
	getAllClientsFromFile() {
		return [
			new Client(
					 1
					,"Dmitrichenko Evgenii"
					,"+7(921)626-50-51"
					,"123"
				 )
			,new Client(
					 2
					,"Dmitrichenko Evgenii"
					,"+7(921)626-50-51"
					,"123"
				 )
		];
	}
}

module.exports = ClientRepo;