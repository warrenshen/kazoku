var Persons = React.createClass({
  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   var author = React.findDOMNode(this.refs.author).value.trim();
  //   var text = React.findDOMNode(this.refs.text).value.trim();
  //   if (!text || !author) {
  //     return;
  //   }
  //   this.props.onCommentSubmit({author: author, text: text});
  //   React.findDOMNode(this.refs.author).value = '';
  //   React.findDOMNode(this.refs.text).value = '';
  // },
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

$(document).on("page:change", function() {
  if ($("#persons").length > 0) {
    React.render(
      <Persons />,
      document.getElementById("persons")
    );
  }
});
