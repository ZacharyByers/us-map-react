import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

class USMap extends React.Component {
  render() {
    return(
      <Segment basic>
        <Image
          id='map'
          src='http://flutterby.us/wp-content/uploads/2017/11/14-map-the-usa-hd-wallpapers-of-usa-map.jpg'
          style={styles.map}
        />
        <Image
          id='highpoint'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.highpoint}
        />
        <Image
          id='mtairy'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.mtairy}
        />
        <Image
          id='troy'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.troy}
        />
        <Image
          id='belmont'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.belmont}
        />
        <Image
          id='hickory'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.hickory}
        />
        <Image
          id='jefferson'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.jefferson}
        />
        <Image
          id='phoenix'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.phoenix}
        />
        <Image
          id='gilbert'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.gilbert}
        />
        <Image
          id='louisville'
          src='http://www.clker.com/cliparts/N/g/p/e/K/Q/red-pin-no-shadow-hi.png'
          style={styles.louisville}
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
