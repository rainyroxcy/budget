//app.js Creation

var url = "https://localhost/3000";

var app = new Vue({
  el: "#app",
  data: {
    bills: [
      {
        type: "Household",
        name: "Rent",
        description: "N/A",
        done: false,
        editing: false,
        deadline: new Date().toLocaleDateString(),
      },
    ],
    new_bill_type: "",
    new_bill_name: "",
    new_bill_description: "",
    new_bill_deadline: "",
  },
});
