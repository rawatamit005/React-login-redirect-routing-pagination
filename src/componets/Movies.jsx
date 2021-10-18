import React, { Component } from 'react'
import Like from './Like';
import Pagination from './Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './ListGroup';
export default class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'name1',
        genrec: 'mcxcscsh1',
        stock: 22,
        rate: '300rs',
        like: false

      },
      {
        id: 2,
        title: 'name2',
        genrec: 'mcxcscsh3',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 3,
        title: 'name3',
        genrec: 'mcxcscsh4',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 4,
        title: 'name4',
        genrec: 'mcxcscsh5',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 5,
        title: 'name5',
        genrec: 'mcxcscsh1',
        stock: 22,
        rate: '300rs',
        like: false

      },
      {
        id: 6,
        title: 'name6',
        genrec: 'mcxcscsh3',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 7,
        title: 'name7',
        genrec: 'mcxcscsh4',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 8,
        title: 'name8',
        genrec: 'mcxcscsh1',
        stock: 22,
        rate: '300rs',
        like: false

      },
      {
        id: 9,
        title: 'name9',
        genrec: 'mcxcscsh3',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 10,
        title: 'name10',
        genrec: 'mcxcscsh4',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 11,
        title: 'name11',
        genrec: 'mcxcscsh5',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 12,
        title: 'name12',
        genrec: 'mcxcscsh1',
        stock: 22,
        rate: '300rs',
        like: false

      },
      {
        id: 13,
        title: 'name13',
        genrec: 'mcxcscsh3',
        stock: 22,
        rate: '300rs',
        like: true

      },
      {
        id: 14,
        title: 'name14',
        genrec: 'mcxcscsh4',
        stock: 22,
        rate: '300rs',
        like: true

      }

    ],
    genres:[], 
    currentPage: 1,
    pageSize: 4
  }
  componentDidMount(){
    
  }
  deleteHandler(movi) {
    const movies = this.state.movies.filter(m => m.id !== movi.id)
    this.setState({ movies: movies })
  }
  likeHandler(movi) {
    const movi1 = this.state.movies.map((co) => {
      if (co.id === movi.id) {
        co.like = !movi.like;

      }
      return co;
    })
    this.setState({ movies: movi1 })
  }
  handelPageChange = p => {
    this.setState({ currentPage: p })
  }
  handleGenreSelect = genre =>{
    console.log(genre);
  };

  render() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (this.state.movies.length === 0)
      return (<p>there is no movie in the database</p>);

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        
        <div className="col-sm-12 col-md-8 col-lg-8">
          <p>{this.state.movies.length} this is the lenght</p>
          <div class="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genrec</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movi) => (
                <tr key={movi.id}>
                  <td>{movi.title}</td>
                  <td>{movi.genrec}</td>
                  <td>{movi.stock}</td>
                  <td>{movi.rate}</td>
                  <td>
                    <Like onLike={() => this.likeHandler(movi)} movies={movi}></Like>
                  </td>
                  <td>
                    <button onClick={() => this.deleteHandler(movi)} className="btn btn-danger">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <Pagination
            itemsCount={allMovies.length}
            pageSize={pageSize}
            onPageChange={this.handelPageChange}
            currentPage={currentPage}
          />

        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} />
        </div>

      </div>
    )
  }
}
