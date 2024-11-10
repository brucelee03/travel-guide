import styled from 'styled-components'

export const TravelPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef4f7;
  height: 100vh;
  overflow-y: auto;
  font-family: 'Roboto';
`

export const LoaderContainer = styled(TravelPlaceContainer)`
  justify-content: center;
`

export const FailureContianer = styled(TravelPlaceContainer)`
  justify-content: center;
`

export const Header = styled.div`
  border: solid 3px #52bbf0;
  border-width: 0 0 3px 0;
  margin-bottom: 22px;
`

export const Heading = styled.h1`
  color: #334155;
  margin-bottom: 7px;
  font-size: 28px;
`

export const TravelPlacesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  margin-right: 30px;
`

export const FailureMsg = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #334155;
`

export const PlaceItem = styled.li`
  width: 420px;
  background-color: #ffffff;
`

export const PlaceImg = styled.img`
  width: 100%;
`

export const PlaceName = styled(Heading)`
  color: #475569;
  font-size: 19px;
  margin: 8px 14px;
`

export const PlaceDescription = styled.p`
  margin: 8px 14px;
  font-size: 15px;
  color: #64748b;
`
