const users = [
  {
    id: 1
    , login: 'rom'
    , pass: '123'
    , name: "Роман"
    , avatar: '/img/profile_avatar.jpg'
    , exp: '3400'
    , quests: {
      create: ['10', '3', '6'],
      take: ['435']      
    }
    , about: 'Немного информации о себе'
    , contacts: {
      email: 'qweasd@fgh.dfg'
      , phone: '8 954 123 45 85'
      , social: ['vk.com/dfjkhgkdjfhg', 'behance.com/sdlfjsdlfksjd']
    }
    , skills: [
      {idCat: 1, exp: '1600'}
      , {idCat: 4, exp: '800'}
      , {idCat: 3, exp: '1000'}
    ]
  }, 
  {
    id: 2
    , login: 'katarin'
    , pass: '123123'
    , name: "Катюн"
    , avatar: '/img/superman.png'
    , exp: '8400'
    , quests: {
      create: ['4', '5'],
      take: ['10', '3', '6']      
    }
    , about: 'Катюн - самая большая балда в мире'
    , contacts: {
      email: 'katarin@kata.rin'
      , phone: '8 954 123 45 85'
      , social: ['vk.com/dfjkhgkdjfhg', 'behance.com/sdlfjsdlfksjd']
    }
    , skills: [
      {idCat: 1, exp: '1800'}
      , {idCat: 4, exp: '3800'}
      , {idCat: 3, exp: '2800'}
    ]
  }  
]
export default users;