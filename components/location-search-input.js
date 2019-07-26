import React from 'react'
import { connect } from 'react-redux'
import PlacesAutocomplete from 'react-places-autocomplete'
import { addCity } from '../actions/'

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '' 
        }
    }

    handleChange = city => {
        this.setState({ 
            city,
        })
    };

    handleSelect = city => {
        this.props.addCity(city)
    };

    render() {
        const renderSuggestionList = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
            <div className="autocomplete-root">
                <input {...getInputProps()} />
                <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => (
                        <div {...getSuggestionItemProps(suggestion)}>
                            <span>{suggestion.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.city}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}>
                    {renderSuggestionList}
                </PlacesAutocomplete>
            </div>
        )
    }
}
const mapDispatchToProps = { addCity }

export default connect(null, mapDispatchToProps)(LocationSearchInput)