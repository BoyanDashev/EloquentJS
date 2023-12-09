class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  calculateMinus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
    }
   get calculatelength() {
        return  Math.sqrt(this.x + this.x + this.y + this.y) 
    }
}



console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1,2).plus(new Vec(2,10)))

console.log(new Vec(10,20).calculateMinus(new Vec(2,1)))
console.log(new Vec(3, 4).calculatelength);


//get calculation{
      //  return result = Math.sqrt(this.x.dimensions) + Math.sqrt(this.y.dimensions);
    //}
