const months = {
  January: 1,
  February : 2,
  March : 3,
  April : 4,
  May : 5,
  June : 6,
  July : 7,
  August : 8,
  September : 9,
  October : 10,
  November : 11,
  December : 12,
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
}

let today = new Date();
let today_date = months[(today.getMonth()+1)] + ' ' + today.getDate();

const data = [
    {
      id: 1,
      name: 'Taylor',
      birthday: 'December 13',
      happyBDay: false,
      image:
        'https://media.giphy.com/media/dXKiD8XysOuhFAJB1f/giphy.gif',
    },
    {
      id: 2,
      name: 'Shawn',
      birthday: 'August 8',
      happyBDay: false,
      image:
      'https://p.favim.com/orig/2018/12/03/shawn-mendes-gif-Favim.com-6630227.gif',
    },
    {
      id: 3,
      name: 'Chrissy',
      birthday: 'August 23',
      happyBDay: false,
      image:
      'https://media.tenor.com/images/ce41901a555446132b04bc4cd90bc5bc/tenor.gif',
    },
    {
      id: 4,
      name: 'Madison',
      birthday: 'March 5',
      happyBDay: false,
      image:
      'https://i.pinimg.com/originals/55/f3/24/55f32404efb7db8b0d83ab89db7e940d.gif',
    },
    {
      id: 5,
      name: 'Luke',
      birthday: 'July 16',
      happyBDay: false,
      image:
      'https://media.giphy.com/media/C9U8DymzFBvck/giphy.gif',
    },
    {
      id: 6,
      name: 'Person bday today',
      birthday: today_date,
      happyBDay: false,
      image:
        'https://via.placeholder.com/70.jpg',
    },
  ];

  export default data;