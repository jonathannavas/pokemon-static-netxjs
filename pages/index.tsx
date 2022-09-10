import { Grid } from "@nextui-org/react"
import { GetStaticProps, NextPage } from "next"
import { pokeApi } from "../api"
import { Layout } from "../components/layouts"
import { PokemonCard } from "../components/pokemon"
import { PokemonListResponse, SmallPokemon } from "../interfaces"

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons &&
          pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />
          })}
      </Grid.Container>
    </Layout>
  )
}
// getStaticProps works only on the server side
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=10")

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }))

  return {
    props: {
      pokemons,
    },
  }
}
export default HomePage
