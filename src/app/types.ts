type Item ={
    name:string,
    price:number,
    url:string,
    id:number,
    desc:string
}
type Cart = {
    item:Item,
    quantity:number
}
type Order ={
    name:string,
    address:string,
    cart:Cart[],
    total:number,
    id:number
}

export {Item,Cart,Order}