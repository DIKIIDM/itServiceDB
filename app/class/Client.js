class Client {
	constructor(id, firstname, middlename, lastname, phone, clientRepo) {
	    this.id = id;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.phone = phone;
        this.clientRepo = clientRepo;
	}
	async insert() {
	    return await this.clientRepo.insert(this);
    }
    async update() {
	    return await this.clientRepo.update(this);
    }
}
module.exports = Client;