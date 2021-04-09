var app = new Vue ({
  el: '#app',
  data: {
    movies: [],
    searchMovie: '',
  },
  methods: {
    filterMovie: function () {
      if (this.searchMovie) {
        axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            "api_key": "d0c11e47595cb972b76620a5f0e0ee12",
            "language":"it-IT",
            "query": this.searchMovie,
            "include_adult": false
          }
        })
        .then((risposta) => {
          this.movies = risposta.data.results;
          this.movies.forEach((item, i) => {
            let voteRating = item.vote_average / 2;
            let roundVote = Math.floor(voteRating);
            item.vote_average = roundVote;
          });
        });
      }
    },
  }
});
