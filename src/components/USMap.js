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
          src='http://intellisyn.com/wp-content/uploads/2015/09/map-marker-icon-300x300.png'
          style={styles.pin}
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
  pin: {
    position: 'absolute',
    height: '5vh',
    top: '42vh',
    left: '103vh',
  }
}

export default USMap
