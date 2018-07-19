let inquirer = require("inquirer");
let mysql = require("mysql");

// set up connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

// test connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("\n Welcome to Bamazon! Here is our current inventory: \n");
    productList();
});

function productList() {
    connection.query("SELECT * FROM products", function(err,res) {
        if (err) throw err;       
        for (var i = 0; i < res.length; i++) {
        console.log("id#:" + res[i].item_id + " product:" + res[i].product_name + " price:" + res[i].price +"\n");        
        };
        productSelect();
    })
};

function productSelect() {
    inquirer
    .prompt({
        
            name: "item",
            type: "input",
            message: "What is the id of the item you would like to buy?"       
       
            })
.then(function(answer) {

if (answer.item === "1") {
    connection.query("SELECT product_name FROM products", function(err,res) {
        if (err) throw err;
        console.log("you selected " + res[0].product_name);
        quantitySelect();
    });
    
}

})
    
};

function quantitySelect() {
    inquirer
    .prompt({
        name: "amount",
            type: "input",
            message: "How many would you like to buy?"
    })

    .then(function(answer) {

    if (answer.amount === "2") {
        connection.query("UPDATE  products SET ? WHERE ?",
        [
            {
              stock_quantity: 6
            },
            {
              product_name: "Hockey Stick"
            }
          ],
          function(err,res) {
              console.log(res[0] + " quantity has been updated");
          })
    }
    })
};
    
        
    
//    

