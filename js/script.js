var app = new Vue ({
  el: '#app',
  data: {
    movies: [],
    searchMovie: ''
  },
  methods: {
    fitlerMovie: function () {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=d0c11e47595cb972b76620a5f0e0ee12&language=it-IT&query=il signore degli anelli&page=1&include_adult=false")
          .then((risposta)=> {
            this.movies = risposta.this.data.results;
      });
    },
  }
});
