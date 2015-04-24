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
    var month = this.months()[date.getMonth()];
    return month + " " + date.getDay();
  }
}
