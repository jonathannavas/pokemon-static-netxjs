import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter()
  const handleRedirect = (id: number) => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={() => handleRedirect(pokemonId)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  )
}
