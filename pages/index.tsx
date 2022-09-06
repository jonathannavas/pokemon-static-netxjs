import { GetStaticProps, NextPage } from "next"
import { pokeApi } from "../api"
import { Layout } from "../components/layouts"
import { PokemonListResponse } from "../interfaces"

const HomePage: NextPage = (props) => {
  console.log(props)
  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}
// getStaticProps works only on the server side
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")
  return {
    props: {
      pokemons: data.results,
    },
  }
}
export default HomePage
