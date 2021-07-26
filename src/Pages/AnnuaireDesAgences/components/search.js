import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Agence from './Agence';

class Search extends Component {
  constructor() {
            super();
            this.state = {
              search: [],
              filteredSearch: ''
            }
          }

  componentDidMount() {
    axios.get(`http://localhost:5001/agenz-dev/us-central1/api/agents`)
      .then(res => {
        this.setState({ search : res.data});
      })
  }

  handleSearch = (e) => {
    this.setState({
    filteredSearch: e.target.value
    })
  }

filteredPlants = () => {
    return this.state.search.filter(agent => {
        return agent.nameEntreprise.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
    })
  }

  render() {
      return (
          <>
            {this.state.loading ? 
                <p>waiting</p>    
            :(
            <>
                <div className="agent">
                <div className="a-heading">
                    <div className="row">
                        <h1>Agents</h1>
                        <input 
                        className = "search"
                        label='Filter Agents: ' 
                        placeholder='Enter Agent name'
                        onChange={this.handleSearch} />
                    </div>
                    <p>Move to What Moves You</p>
                    </div>
                    <Agence  items={this.filteredPlants()}/>
                </div>
            </>
            )
      }
      </>
      )
    }
}

export default withRouter(Search);
