import { title } from 'process';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.append('Удали меня');
    document.body.append(button);

    button.addEventListener('click', function () {
        this.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.append(arr[i]);
        ul.append(li);
    }

    ul.addEventListener(
        'mouseover',
        function (event) {
            if (event.target && event.target.nodeName === 'LI')
                event.target.setAttribute('title', event.target.textContent);
        },
        true,
    );

    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = 'https://tensor.ru/';
    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.append('tensor');
    document.body.append(a);

    a.addEventListener(
        'click',
        function (event) {
            event.target.textContent = event.target.textContent + ` ${link}`;
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');

    let li = document.createElement('li');
    li.append('Пункт');
    ul.append(li);

    let button = document.createElement('button');
    button.append('Добавить пункт');

    ul.addEventListener(
        'click',
        function (event) {
            if (event.target && event.target.nodeName === 'LI')
                event.target.textContent = event.target.textContent + '!';
        },
        true,
    );

    button.addEventListener(
        'click',
        function () {
            let newLi = document.createElement('li');
            newLi.append('Пункт');
            ul.append(newLi);
        },
        true,
    );

    document.body.append(ul);
    document.body.append(button);
}
