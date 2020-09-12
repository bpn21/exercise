moduel.exports = (mappedProduct, mapProduct) => {
    if (mapProduct.client)
        mappedProduct.client = mapProduct.client
    if (mapProduct.item)
        mappedProduct.item = mapProduct.item
    if (mapProduct.size)
        mappedProduct.size = mapProduct.size
    if (mapProduct.catogory)
        mappedProduct.catogory = mapProduct.catogory
    if (mapProduct.status)
        mappedProduct.status = mapProduct.status
    if (mapProduct.price)
        mappedProduct.price = mapProduct.price
    if (mapProduct.quantity)
        mappedProduct.quantity = mapProduct.quantity
    if (mapProduct.image)
        mappedProduct.image = mappedProduct.image

    return mappedProduct
}
