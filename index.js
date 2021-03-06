const main = (
  // Начальное состояние ленты
  L='_________1111+111*11=_________________________________________________',
  // Алфавит (порядок важен)
  A='1*+=_',
  // Таблица переходов
  T=[
    // S\Q |  0  |  1  |  2  |  3  |  4  |   5  |  6  |  7  |  8  |  9  |  10  |  11  |   Q/S
    /* 1 */["_>1","1>1","1<2","_>4","1>4","_>10","1<6",  "e",  "1<8","_>9","1>10","e"  ], // 1
    /* * */[  "e", "*>1", "*<2","_>9","*>5", "e",  "e", "*<8", "e", "e",  "e",    "e"  ], // *
    /* + */["_>3","+>1","+<2",  "e", "e"  , "e" ,  "e" , "e",  "e", "e",  "e",    "e"  ], // +
    /* = */[  "e"  ,"=>1","=<2","e","=<7","=<7" ,"=<6",  "e",  "e","_!11","=>10","_!11"], // =
    /* _ */["_>0","1<2","_>0",  "e","_>5",  "e"  ,"_>5","1<7","_>3",  "e","1<6",  "e"  ] // _
  ],
  // Начальное состояние коретки
  i=0,
  // Начальное состояние конфигурации
  s=0
) => {
  L = L.split('')

  let f = true

  console.log('Лента До   : '+ L.join(''))
  while (f) {
    // Делаем ленту бесконечной
    if (i>=L.length) L.push('_')
    else if (i<0) L.unshift('_')


    let c = T[A.lastIndexOf(L[i])][s]
    //console.warn('Команда: '+c)
    if (c==='e') break;
    // Заменяем символ
    //console.warn('Лента была  : ' + L.join(''))
    L[i] = c[0]
    //console.warn('Лента сейчас: ' + L.join(''))
    // Шагаем
    switch (c[1]) {
      case '>':
        i++
        break
      case '<':
        i--
        break
      case '!':
        f = false
        break
      default:
        console.error(`Не существующая команда перехода ${c}, ожидалось [>, <, !]`)
    }
    //console.warn('Строка: '+L[i])
    // Переходим в другое состояние
    s = +(c.length === 4 ? c[2]+c[3] : c[2])
    //console.warn('Состояние: '+s)

  }

  //console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log('Лента После: '+ L.join(''))
  //console.log('Не пустых ячеек: '+ L.filter(l => l !== '_').length)
}


const fs = require('fs')
main(
  fs.readFileSync('input/lenta', 'utf8'),
  fs.readFileSync('input/alphabet', 'utf8'),
  JSON.parse(
    (fs.readFileSync('input/table.json', 'utf8')) // Читаем из файла
    .replace(new RegExp(/(#.*)|(\/\*.*\*\/)|(\/\/.*)/, 'gi'), '').trim()
  )
)