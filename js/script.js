var app = new Vue ({
  el: '#app',
  data: {
    baseURL: 'https://api.themoviedb.org/3/search/',
    apiKey: 'd0c11e47595cb972b76620a5f0e0ee12',
    movies: [],
    series: [],
    searchMovie: '',
    langIndex: 0,
    langs: [
      'it-IT',
      'en-US',
      'fr-FR',
      'es-ES',
    ],
    movieCategory: true,

  },
  methods: {
    filterMovie: function () {

      if (this.searchMovie != "") {
        if(this.movieCategory) {
          axios.get(this.baseURL + 'movie', {
            params: {
              "api_key": this.apiKey,
              "language": this.langs[this.langIndex],
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
        } else {
          // funzione che stampa i film - end
          axios.get(this.baseURL + 'tv', {
            params: {
              "api_key": this.apiKey,
              "language": this.langs[this.langIndex],
              "query": this.searchMovie,
              "include_adult": false
            }
          }) .then((risposta)=> {
            this.series = risposta.data.results;
            this.series.forEach((item, i) => {
              // modifico il voto
              let voteRating = item.vote_average / 2;
              let roundVote = Math.floor(voteRating);
              item.vote_average = roundVote;
              this.movies.push(item);
            });
          });
        }
      }
    },
    shiftCategory: function () {
      if (this.movieCategory) {
        this.movieCategory = false;
        console.log(this.movieCategory);
      } else {
        this.movieCategory = true;
        console.log(this.movieCategory);
      }
    }
  },
});
