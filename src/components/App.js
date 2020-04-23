import React from 'react'

import { Grid, Card } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'

class App extends React.Component {

    state = {
        pokemons: []
    }

    getPokemonData = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30')
            const data = await res.json()
            this.setState({
                pokemons: data.results
             })       
        }
        catch(e) {
            console.log(e)
        }
        
    }

    componentDidMount() {
        this.getPokemonData()
    }

    render() {
        const { pokemons } = this.state
        return (
            <div>
            <h2 className="ui center aligned header">Simple Pokedex</h2>
            <div className="ui container">
                <Grid centered columns={3}>
                    {pokemons.length > 0 && pokemons.map(pokemon => {
                        return (
                            <Grid.Column>
                            <Card>
                                <PokemonCard details={pokemon} />
                                <Card.Content>
                                    <Card.Header>{pokemon.name}</Card.Header>
                                </Card.Content>
                            </Card>
                            </Grid.Column>
                        )
                    })}
                     
                </Grid>
            </div>
            </div>
        )
    }
}

export default App