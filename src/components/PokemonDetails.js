import React from 'react'

class PokemonDetails extends React.Component{

    state = {
        statusBtn: false
    }


    handleShowBtn = () => {
        this.setState({
            statusBtn: !this.state.statusBtn
        })
    }

    renderAbility = (pokemonAbilities) => {
        return pokemonAbilities.map((ability) => 
            <p key={ability.ability.name}>Abilities: {ability.ability.name}</p>
        )
    }

    renderTypes = (types) => {
       return types.map((type) => 
        <p key={type.type.name}>Type: {type.type.name}</p>
        )
    }

    renderAllDetail = (pokemonDetails) => {
        return ( 
            <div key={pokemonDetails.name}>
                <p key={pokemonDetails.name}>
                    Base Experience: {pokemonDetails.base_experience}
                </p> 
                {this.renderAbility(pokemonDetails.abilities)}
                {this.renderTypes(pokemonDetails.types)}
                <img src={pokemonDetails.sprites.back_default} alt={pokemonDetails.sprites.back_female}/>
            </div>
        )
    }


    render() {
        const { info } = this.props
        return (
            <div>
                <button onClick={this.handleShowBtn}>Show Details</button>
                { this.state.statusBtn ? this.renderAllDetail(info) : ''}
            </div>
        )
    }
}

export default PokemonDetails