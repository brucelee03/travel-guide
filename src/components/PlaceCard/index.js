import {
  PlaceItem,
  PlaceImg,
  PlaceName,
  PlaceDescription,
} from '../styledComponents'

const PlaceCard = props => {
  const {placeData} = props
  const {name, imageUrl, description} = placeData

  return (
    <PlaceItem>
      <PlaceImg src={imageUrl} alt={name} />
      <PlaceName>{name}</PlaceName>
      <PlaceDescription>{description}</PlaceDescription>
    </PlaceItem>
  )
}

export default PlaceCard
