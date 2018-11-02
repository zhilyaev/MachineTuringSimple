# Эмулятор машины Тьюринга
> Самый простой пример-велосипед

### `f(x,y,z) = y+x*z`
- `g (x,y) = f(x,y,x)`

`g(3,4) => f(4,3,3)` => Переводим в унарную систему => 1111+111*111

### Начальные установки
![Пример из программы Algo2000](docs/algo2000.png)

## Запуск в Algo2000
![Running](docs/running.gif)
Получаем ответ: 1111111111111 => 13 (в десятичной)

# Запуск Скрипта
```bash
$ npm run start
# or
$ yarn start
# or
$ node index.js
# or
$ nodejs index.js
or
$ ctr+c from index.js => open console in chrome => ctrl+v
```