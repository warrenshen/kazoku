var Requester = {

  send: function(type, path, arguments) {
    var request = new XMLHttpRequest();
    request.open(type, path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
    return request;
  }
}
