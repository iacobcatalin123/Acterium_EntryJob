import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'
import style from './Pokemons.module.css';
export class Pokemon extends Component {
  static displayName = Pokemon.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.pokemonData();
  }

  get_pokemons() {
  }

  static RenderPokemons(pokidata) {
    return (
      <div className={style.info}>
        {pokidata.map(pokidata =>
            <div className={style.card}>
                <h1>{pokidata.name}</h1>
                <h6>More info <a href={pokidata.url}>Here</a></h6>
            </div>
          )}


     </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Pokemon.RenderPokemons(this.state.forecasts);

    return (
      <div>
        {contents}
      </div>
    );
  }

  async pokemonData() {
    const token = await authService.getAccessToken();
    const response = await fetch('weatherforecast', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    
    // const response = await 
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results);
    //     this.setState({ forecasts: data.results, loading: false });
    //   });
    
    
      this.setState({ forecasts: data, loading: false });
  }
}
