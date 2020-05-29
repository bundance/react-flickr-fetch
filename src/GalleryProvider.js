import { Component } from "react";

const URL =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ffee324251c2815b9b895133af851243&safe_search=1&content_type=1&sort=relevance&text=vessel%20marine&format=json&nojsoncallback=1&per_page=16";

class GalleryProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchData({ page: 1 });
  }

  fetchData = ({ page }) => {
    const validPage = page < 1 ? 1 : page;
    const pagedUrl = `${URL}&page=${validPage}`;

    fetch(pagedUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data, page: validPage });
      });
  };

  render() {
    const { photos: { photo } = {} } = this.state.data;
    return this.props.children({
      photos: photo,
      fetchData: this.fetchData,
      page: this.state.page,
    });
  }
}

export default GalleryProvider;
