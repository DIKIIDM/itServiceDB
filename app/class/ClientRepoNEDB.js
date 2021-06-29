class ClientRepoNEDB {
	constructor(database) {
        this.database = database;
	}
	async insert(client) {
        let result = {
             success: false
            ,message: ""
        };;
        let clients = await this.database.find({phone: client.phone});
        if (clients.length === 0) {
            let res = await this.database.insert(client);
            result.success = true;
        } else {
            result.message = "Ошибка! Такой телефон уже существует";
        }
        return result;
    }
    async update(client) {
	    let result = {
	        success: false
            ,massage: ""
        }
        let res = await this.database.update({_id: client.id}, client);
        if (res == 1) {
            result.success = true;
        }
        return result;
    }
    async getOne(idClient) {
	    return await this.database.findOne({_id: idClient});
    }
    async getAll() {
        return await this.database.find({});
    }
}
module.exports = ClientRepoNEDB;