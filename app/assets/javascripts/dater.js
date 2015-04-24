var Dater = {

  months: function() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  },

  monthWithDate: function(date) {
    return this.months()[date.getMonth()] + " " + date.getDay();
  }
}
