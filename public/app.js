
function something() 
{
    //Получаем переменную х (типо string) из localStorage, доступна только внутри этого метода
    //каждый раз при вывзове метода она новая,окно вывелось нажали окей, она пропала а потом создалась заново
    var x = window.localStorage.getItem('bbb');

    //Увеличиваем значение на 1
    //Переводим х в ineger хитрым методом умножая на 1
    x = x * 1 + 1

    //aaa это ключ, устанавливаем значение этого ключа равное значению нашей переменной
    window.localStorage.setItem('bbb', x);
    
    alert(x);  
}

function add_to_cart(id){

    var key = 'product_' + id;
	
    var x = window.localStorage.getItem(key);  
    x = x * 1 + 1;

    window.localStorage.setItem(key, x);
}

function cart_get_number_of_items() {
    //Обьявляем перемунную в которой будем считать общее количество заказов в корзине
    let count = 0;

    for(let i=0; i<localStorage.length; i++) {

        //Получаем ключ по индексу массива, мы же проходим как в массиве, с 0 элемента
        let key = localStorage.key(i);

        //Получаем значение(количествой пиццы) по ключу
        let value = localStorage.getItem(key);
        
//Провреряем чтоб ключ начинался на (product_) так как в localstorage  могут другие значения хранится 
//indexof возвращает индекс вхождения элемента, в нашем случае нужно чтою 0. И превращаем в true
        //
        if(key.indexOf('product_') == 0)
        {
            //Считаем и с помощщью + приводим value к числу
            count += (+value);
        }
        
    }
    return count;
}
