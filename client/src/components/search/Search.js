import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Button from "../Button";
import Card from "../Card";

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
}

handleFormSubmit = (e) => {
  e.preventDefault()
  this.props.actions.fetchStartingLocation(this.state.startingLocation)
}

handleChangeStart = (e) => {
  this.setState({
      startingLocation: e.target.value,
  })
}

handleChangeDestination = (e, {value: destination}) => {
  this.setState({
    destination
  })
}

handleStartSearch = (e) => {
  e.preventDefault()

}

handleDestinationSearch = (e) => {
  console.log(this.state.destination)
  e.stopPropagation()
  this.props.actions.fetchStartingLocation(this.state.startingLocation)
}

handleUpdateAddress = (e) => {
  this.setState({
      startingLocation: e.currentTarget.innerText,
  })
}

  render() {
    return (
      <Card >
        <SearchInput label="Starting Location..." />
        suggestedLocations={this.props.suggestedStartingLocations}
        onChange={this.handleChangeStart} 
        onSubmit={this.handleStartSearch}
        handleUpdateAddress={this.handleUpdateAddress}/>
          <br/> 
          <br/>
        <SearchInput label="Destination..." onChange={this.handleChangeDestination} onClick={this.handleDestinationSearch}/> 
          <br/>
          <br/> 
        <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
      </Card>
    )
  };
}

export default Search;