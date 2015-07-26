var TweetBox = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            photoAdded: false
        };
    },
    togglePhoto: function() {
        this.setState({ photoAdded: !this.state.photoAdded });
    },
    handleChange: function(event) {
        this.setState({ text: event.target.value });
    },
    remainingCharacters: function() {
        if(this.state.photoAdded) {
            return 140 - 23 - this.state.text.length;
        } else {
            return 140 - this.state.text.length;
        }
    },
    overflowAlert: function() {
        if(this.remainingCharacters() < 0) {
            return (
                <div className="alert alert-warning">
                    <strong>Oops! Too Long:</strong>
                </div>
            );
        } else {
            return "";
        }
    },
    render: function() {
        return (
            <div className="well clearfix">
                { this.overflowAlert() }
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <span>{ this.remainingCharacters() }</span>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
                <button className="btn btn-defauly pull-right" onClick={this.togglePhoto}>
                    {this.state.photoAdded ? "Photo Added" : "Add Photo"}
                </button>
            </div>
        );
    }
});

React.render(
    <TweetBox />,
    document.body
);
