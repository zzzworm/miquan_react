import React from 'react'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom'
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


const Home = () => (
  <div >
    <AppBar title="米圈" />
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
)

export default Home
