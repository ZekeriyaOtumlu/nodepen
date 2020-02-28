var React = require('react');
var axios = require('axios');
	
module.exports = React.createClass({
	getInitialState: function() {
		return {
			lat: '',
			lng: ''
		};
	},
	getLocale: function(locale) {
		locale = locale.trim().split(' ').join('+');
			var addr = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locale;
			axios
				.get(addr)
				.then(function(result) {
					if (result.status === 200) {
						var lt = result.data.results[0].geometry.location.lat;
						var lg = result.data.results[0].geometry.location.lng;
						this.setState({ lat: lt, lng: lg });
					}
				}.bind(this));
	},
	componentDidMount: function() {
		if(typeof window !== 'undefined'){
			var locale = this.props.eventLocale;
			this.getLocale(locale);
		}
	},
	componentWillReceiveProps: function(nextProps) {
		if(this.props.eventLocale !== nextProps.eventLocale) {
			var locale = nextProps.eventLocale;
			this.getLocale(locale);
		}	
	  }, 
	  
  
    render: function() {
		
        return (
            <div className="frameWrapper">
                <iframe
			id="forecast_embed"
			key={this.state.lat}
			type="text/html"
			frameBorder="0"
			height="245"
			width="90%"
			src={"http://forecast.io/embed/#lat=" + this.state.lat + "&lon=" + this.state.lng + "&name=event"}>
		</iframe>
            </div>
        );
    }
});