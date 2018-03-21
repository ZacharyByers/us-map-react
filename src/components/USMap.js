import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

class USMap extends React.Component {
  render() {
    return(
      <Segment basic>
        <Image
          src='http://flutterby.us/wp-content/uploads/2017/11/14-map-the-usa-hd-wallpapers-of-usa-map.jpg'
          style={styles.map}
        />
        <Image
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.highpoint}
        />
        <Image
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.mtairy}
        />
        <Image
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.belmont}
        />
        <Image
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.hickory}
        />
        <Image
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.troy}
        />
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
}

export default USMap
