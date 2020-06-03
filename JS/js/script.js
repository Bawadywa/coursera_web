function Operation(num){
	this.num = num;
}
Operation.prototype.square = function() {
	return Math.pow(this.num, 2);
};
Operation.prototype.square_root = function(){
	return Math.pow(this.num, 0.5);

};
var num_1 = new Operation(4);
console.log(num_1);
console.log(num_1.square())
console.log(num_1.square_root())