class Client {
	constructor(pName, pPhone, npNote) {
		this.id = 1;
		this.sName = pName;
		this.sPhone = pPhone; 
		this.sNote = npNote;
	}
	//-----------------------------------------------------------
	setName(newName) {
		this.name = newName;
	}
}
module.exports = Client;