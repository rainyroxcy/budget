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
  },
});
