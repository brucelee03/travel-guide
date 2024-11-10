import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PlaceCard from '../PlaceCard'
import {
  TravelPlaceContainer,
  FailureContianer,
  LoaderContainer,
  Header,
  Heading,
  FailureMsg,
  TravelPlacesList,
} from '../styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TravelPlaces extends Component {
  state = {placesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTravelPlaces()
  }

  getTravelPlaces = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({
        placesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTravelPlacesList = () => {
    const {placesList} = this.state

    return (
      <TravelPlaceContainer>
        <Header>
          <Heading>Travel Guide</Heading>
        </Header>
        <TravelPlacesList>
          {placesList.map(placeItem => (
            <PlaceCard key={placeItem.id} placeData={placeItem} />
          ))}
        </TravelPlacesList>
      </TravelPlaceContainer>
    )
  }

  renderFailureView = () => (
    <FailureContianer>
      <FailureMsg>Something went wrong. Please try again later.</FailureMsg>
    </FailureContianer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelPlacesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default TravelPlaces
