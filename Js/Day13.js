// Declare your class here.
class MyBook extends Book {
    /**
     * Class Constructor
     * @param {string} title - The book's title.
     * @param {string} author - The book's author.
     * @param {number} price - The book's price.
     */
    constructor(title, author, price) {
        super(title, author); // Call the parent constructor
        this.price = price;
    }

    /**
     * Method Name: display
     * Print the title, author, and price in the specified format.
     */
    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

// End class

function main() {
    let title = readLine()
    let author = readLine()
    let price = +readLine()

    let book = new MyBook(title, author, price)
    book.display()
}
