class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    let popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    if (this.length > 0) {
      this.length--;
    }
    return popped;
  }

  shift() {
    if (this.length > 0) {
      let shifted = this.data[0];
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.data[this.length - 1] = undefined;
      this.length--;
      return shifted;
    }
  }

  unshift(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    let newArr = new Array(this.capacity);
    newArr[0] = val;
    for (let i = 0; i < this.length; i++) {
      newArr[i + 1] = this.data[i];
    }
    this.data = newArr;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    let newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;
    this.capacity *= 2;
  }

}


module.exports = DynamicArray;
