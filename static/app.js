//app.js Creation
var url = "https://localhost/8080";

var app = new Vue({
  el: "#app",
  data: {
    bills: [
      {
        type: "Household",
        name: "Rent",
        description: "N/A",
        amount: "",
        done: false,
        editing: false,
        deadline: new Date().toLocaleDateString(),
      },
    ],
    new_bill_type: "",
    new_bill_name: "",
    new_bill_description: "",
    new_bill_deadline: "",
    new_bill_amount: "",
  },
});
