export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}

export const getDate = () => {
    let today = new Date();
    let date = `${today.getFullYear().toLocaleString()}-${today.getMonth().toLocaleString()}-${today.getDate().toLocaleString()}`
    let time = `${today.getHours().toLocaleString()}:${today.getMinutes().toLocaleString()}`

    let dateTime = `${date} ${time}`

    return dateTime
}