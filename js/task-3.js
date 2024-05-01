class StringBuilder {
  #initialValue;

  constructor(initialValue) {
    this.#initialValue = initialValue;
  }

  getValue() {
    return this.#initialValue;
  }

  padEnd(str) {
    this.#initialValue += str;
  }

  padStart(str) {
    this.#initialValue = str + this.#initialValue;
  }

  padBoth(str) {
    this.#initialValue = str + this.#initialValue + str;
  }
}
