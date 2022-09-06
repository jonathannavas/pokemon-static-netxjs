import { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/layouts"

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
  console.log("hola mundo")
  return {
    props: {
      name: "Jonathan Navas",
    },
  }
}
export default HomePage
