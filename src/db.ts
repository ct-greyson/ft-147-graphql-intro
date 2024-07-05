let games = [
    {id: '1', title: 'The Legend of Zelda Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Resident Evil 4', platform: ['Xbox', 'PS5', 'PC']},
    {id: '5', title: 'Mario Kart 8 Deluxe', platform: ['Switch']},
  ]
  
  let authors = [
    {id: '1', name: 'Christian S.', verified: true},
    {id: '2', name: 'Dylan K.', verified: false},
    {id: '3', name: 'Kevin B.', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
  ]
  
  export default { games, authors, reviews }