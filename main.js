fetch('./livesdasemana.html')//'https://cors-anywhere.herokuapp.com/https://www.letras.mus.br/blog/lives-da-semana/') // Pega os dados do site
  .then(response => {
    console.log(response.status)
    if(response.status === 200)
      return response.text()
  })
    .then(html => {
      var parser = new DOMParser(); // Inicia o parser de html

      const doc = parser.parseFromString(html, "text/html"); // formata a string para html

      const lives_hoje_html = doc.querySelector(".wrapper").querySelector("[id='all']").querySelector("[id='cnt_top']")
      .querySelector(".news.g-1").querySelector(".g-1.g-fix.news-body.g-sp").querySelector(".news-copy").querySelectorAll("ul");

      const lives_hoje = Array.from(lives_hoje_html)[1]; 

      console.log(lives_hoje);
    })
  .catch(function(error) {
    console.log('Erro ao requisitar dados do site: ', error);
  });  

// Caminho da lista de lives
// body >> div class="wrapper" >> div id="all" >> div id="cnt_top" >> div class="news g-1" >>
// div class="g-1 g-fix news-body g-sp" >> div class="news-copy" >> <ul><li>live!!</li></ul>