import React from 'react'
import { Image } from 'semantic-ui-react'

import PokemonDetails from './PokemonDetails'

class PokemonCard extends React.Component {

    state = {
        pokemonDetails: {}
    }

    getPokemonCard = async () => {
        try {
            const res = await fetch(this.props.details.url)
            const data = await res.json()
           
            this.setState({
                pokemonDetails: data
            })
        }
        catch(e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getPokemonCard()
    }

    renderPokemon = (pokemonSprite) => {
        return (
            <Image src={pokemonSprite.sprites.front_default} size='small'/>
        )
    }


    render() {
        const { pokemonDetails } = this.state
        return (
            <div>
                {pokemonDetails.name ? (
                    <div>
                        {this.renderPokemon(pokemonDetails)}
                        <PokemonDetails info={pokemonDetails} />
                    </div>
                ) : (
                    <div>Loading data</div>
                )}  
            </div>
        )
    }
}

export default PokemonCard