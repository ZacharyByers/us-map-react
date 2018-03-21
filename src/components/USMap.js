import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const pinUrl = 'http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'

const locations =
  [
    'highpoint',
    'mtairy',
    'troy',
    'belmont',
    'hickory',
    'jefferson',
    'phoenix',
    'gilbert',
    'louisville',
  ]

class USMap extends React.Component {

  pins = () => {
    return locations.map( (l,i) => {
      return <Image
        key={i}
        id={l}
        src={pinUrl}
        style={styles[l]}
      />
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
  highpoint: {
    position: 'absolute',
    height: '5vh',
    top: '42vh',
    left: '105vh',
  },
  mtairy: {
    position: 'absolute',
    height: '5vh',
    top: '41vh',
    left: '103.5vh',
  },
  troy: {
    position: 'absolute',
    height: '5vh',
    top: '45vh',
    left: '106vh',
  },
  belmont: {
    position: 'absolute',
    height: '5vh',
    top: '44vh',
    left: '101.5vh',
  },
  hickory: {
    position: 'absolute',
    height: '5vh',
    top: '43.5vh',
    left: '101vh',
  },
  jefferson: {
    position: 'absolute',
    height: '5vh',
    top: '48vh',
    left: '97.5vh',
  },
  gilbert: {
    position: 'absolute',
    height: '5vh',
    top: '49vh',
    left: '29vh',
  },
  louisville: {
    position: 'absolute',
    height: '5vh',
    top: '32vh',
    left: '47vh',
  },
  phoenix: {
    position: 'absolute',
    height: '5vh',
    top: '49vh',
    left: '28vh',
  },
}

export default USMap
