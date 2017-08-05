import React from 'react'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Question',
    path: '/question'
  },
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'About',
    path: '/about'
  }
];
export default React.createClass({
  render() {
    return <div >
    <AppBar
    title="Title"
  />
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <Link to={tile.path} key={tile.path} >
        <GridTile
          key={tile.img}
          title={tile.title}
        >
          <img src={tile.img} />
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
  </div>
  }
})
