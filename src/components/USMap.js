import React from 'react'
import { Segment, Image, Popup } from 'semantic-ui-react'

const pinUrl = 'http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'

const locations =
  [
    'High Point',
    'Mt. Airy',
    'Troy',
    'Belmont',
    'Hickory',
    'Jefferson',
    'Phoenix',
    'Gilbert',
    'Louisville',
  ]

class USMap extends React.Component {

  pins = () => {
    return locations.map( (l,i) => {
      return(
        <Popup
          key={i}
          trigger={
            <Image
              id={l}
              src={pinUrl}
              style={styles[l]}
            />
          }
          content={<Segment basic>Hello yes this is {l}</Segment>}
        />
      )
    })
  }

  render() {
    return(
      <Segment basic>
        <Image
          id='map'
          src='http://flutterby.us/wp-content/uploads/2017/11/14-map-the-usa-hd-wallpapers-of-usa-map.jpg'
          style={styles.map}
        />
        {this.pins()}
      </Segment>
    )
  }
}

const styles = {
  map: {
    position: 'absolute',
    height: '80vh',
  },
  'High Point': {
    position: 'absolute',
    height: '5vh',
    top: '42vh',
    left: '105vh',
  },
  'Mt. Airy': {
    position: 'absolute',
    height: '5vh',
    top: '41vh',
    left: '103.5vh',
  },
  'Troy': {
    position: 'absolute',
    height: '5vh',
    top: '45vh',
    left: '106vh',
  },
  'Belmont': {
    position: 'absolute',
    height: '5vh',
    top: '44vh',
    left: '101.5vh',
  },
  'Hickory': {
    position: 'absolute',
    height: '5vh',
    top: '43.5vh',
    left: '101vh',
  },
  'Jefferson': {
    position: 'absolute',
    height: '5vh',
    top: '48vh',
    left: '97.5vh',
  },
  'Gilbert': {
    position: 'absolute',
    height: '5vh',
    top: '49vh',
    left: '29vh',
  },
  'Louisville': {
    position: 'absolute',
    height: '5vh',
    top: '32vh',
    left: '47vh',
  },
  'Phoenix': {
    position: 'absolute',
    height: '5vh',
    top: '49vh',
    left: '28vh',
  },
}

export default USMap
