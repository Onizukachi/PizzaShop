
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
`   `
    window.localStorage.setItem(key, x);

}

