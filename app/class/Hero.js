class Hero {
  constructor(pName, pTypeOfAttack, pDemage) {
	this.name = pName;
	this.hp = 100;
	this.demage = pDemage;
	this.typeOfAttack = pTypeOfAttack;
  }
 
  attack() {
	console.log(this.name + " ATTACK: " + this.calcDeamge()); 
  }
  
  move() {
	console.log(this.name + " MOVE: "); 
  }
  
  calcDeamge() {
	  return this.demage + Math.round(Math.random()*10);
  }
}