class WishList {
  list = [];
  nextId = 1;

  add(car) {
    car.id = this.nextId++;
    this.list.push(car);
  }

  remove(id) {
    this.list = this.list.filter((car) => car.id != id);
  }
}

export default WishList;
