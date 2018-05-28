import React from 'react'
import { Segment, Image, Popup } from 'semantic-ui-react'
import pin from '../images/map_pin.png'
import map from '../images/StateMap-01.png'
import nc from '../images/northcarolina.png'

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

  norcar = (e) => {
    e.preventDefault()
    alert('test')
  }

  boing = (e) => {
    e.preventDefault()
    alert('BOING')
  }

  render() {
    return(
      <Segment basic>
        <Image
          id='map'
          src={map}
          style={styles.map}
          usemap='#usmap'
        />
        <map name='usmap'>
          <Popup
            verticalOffset={150}
            horizontalOffset={700}
            basic
            hoverable
            wide='very'
            style={styles.popup}
            position='top right'
            keepInViewPort={false}
            trigger={<area shape='rect' coords="700, 350, 850, 450" alt="test" onClick={this.norcar}/>}
            content={<Image src={nc}/>}
          />
        </map>
      </Segment>
    )
  }
}

const styles = {
  map: {
    height:'80%',
    width:'80%',
  },
  popup: {
    background: 'transparent',
    border: 'transparent',
    boxShadow: 'none',
  }
}

export default USMap
