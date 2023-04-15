



const iconBurguerMenu  = document.querySelector('.icon-burguer-menu');
const burguerMenuMobile  = document.querySelector('.burguer-menu-mobile');
const iconCarritoMenu = document.querySelector('.navbar-shopping-cart');
const asideCarritoMenu = document.querySelector('.product-detail');
const navMenuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


const cardsContainer = document.querySelector('.cards-container');


navMenuEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleBurguerMenu);
iconCarritoMenu.addEventListener ('click', toggleAsideMenu);


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');

    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive')
    const isAsideClosed = asideCarritoMenu.classList.contains('inactive');

    if (!isBurgerMenuClosed || !isAsideClosed) {
        burguerMenuMobile.classList.add('inactive');
        asideCarritoMenu.classList.add('inactive');
    }
}

function toggleBurguerMenu () { 
    burguerMenuMobile.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideClosed = asideCarritoMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed || !isAsideClosed) {
        desktopMenu.classList.add('inactive');
        asideCarritoMenu.classList.add('inactive');
    }
}

function toggleAsideMenu () {
    asideCarritoMenu.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isBurgerMenuClosed) {
        desktopMenu.classList.add('inactive');
        burguerMenuMobile.classList.add('inactive');
    }
}

const productList = [] ;
productList.push({
    name: 'Bike',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg'

});
productList.push({
    name: 'Chair',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg'

});
productList.push({
    name: 'soft sofa & piano',
    price: 18900,
    image: 'https://lh3.googleusercontent.com/6q0zfLCWFCq9-ENcIyc1oJGf1yzAOMR7VQRo1PYARzhhzCVDKn-1NAUF3ku_jnKpi-01haI_FmNR-fQAa40kF_boZMd65ZBm6h88smA'
})
productList.push({
    name: 'table lamp + nightstand',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2017/10/23/22/01/living-2882718_1280.jpg'

});
productList.push({
    name: 'TeddyBear',
    price: 30,
    image: 'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg'

});
productList.push({
    name: 'Real Bear',
    price: 0000,
    image: 'https://cdn.avpasion.com/wp-content/uploads/2022/10/osobear-750x536.jpg'

}); 

function renderProducts (arr) {

    for (product of productList) {

    //Acá creamos el primer div en una variable, luego le agregamos una clase//
     const productCard = document.createElement('div');
     productCard.classList.add('product-card');

    //Acá creamos una imagen, luego con .setAttribute le agregamos el link/src //
    // y hacemos referencia al valor .IMAGE que está dentro del objeto//
    
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);

    //Acá vamos a crear otro div y agregarle la clase .product-Info//

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //Creamos otro div pero Sin clase, esto es para que//
    //todo funcione bien con el CSS //

    const productInfoDiv = document.createElement('div');

    //Acá creamos el parrafo que contiene el precio//

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    //Acá creamos el parrafo que contiene el nombre//
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    //Acá creamos el FIGURE que contiene el IMG//

    const productInfoFigure = document.createElement('figure');

    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './ICONS/bt_add_to_cart.svg');

    productInfoFigure.appendChild(imgProduct);

    productInfoDiv.appendChild(productPrice);

    productInfoDiv.appendChild(productName);
    
    productInfo.appendChild(productInfoDiv);

    productInfo.appendChild(productInfoFigure);

    productInfoFigure.appendChild(productInfoImg);

    //ahora metemos las variables que tratamos como cajitas//

    productCard.appendChild(imgProduct);

    productCard.appendChild(productInfo);

    //ahora metemos las variables que tratamos como cajitas//

    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);