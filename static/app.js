//app.js Creation
var url = "https://localhost/8080";

var app = new Vue({
  el: "#app",
  data: {
    bills: [
      {
        type: "Household",
        name: "Rent",
        description: "The worst bill in the world",
        amount: "1500",
        paid: false,
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
  created: function () {
    this.getBills();
  },

  methods: {
    getBills: function () {
      fetch(`${url}/bills`).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          app.bills = data;
        });
      });
    },

    createBills: function () {
      var request_body = {
        type: this.new_bills_type,
        name: this.new_bills_name,
        description: this.new_bills_description,
        paid: false,
        deadline: this.new_bills_deadline,
        amount: this.new_bills_amount,
      };
      fetch(`${url}/bills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request_body),
      }).then(function (response) {
        console.log(request_body);
        if (response.status == 400) {
          response.json().then(function (data) {
            alert(data.msg);
          });
        } else if (response.status == 201) {
          //These lines of codes clear the input and refresh the todos.
          app.new_todo_type = "";
          app.new_todo_name = "";
          app.new_todo_description = "";
          app.new_todo_deadline = "";
          app.new_todo_amount = "";
          app.getBills();
        }
      });
    },
  },
});
