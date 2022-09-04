import { Button } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de pokemons">
      <Button color="gradient">Hello world</Button>
    </Layout>
  )
}

export default HomePage
