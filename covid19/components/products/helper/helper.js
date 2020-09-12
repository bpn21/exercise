module.exports = (mappedProduct, mapProduct) => {
    if (mapProduct.name)
        mappedProduct.name = mapProduct.name
    if (mapProduct.brand)
        mappedProduct.brand = mapProduct.brand
    if (mapProduct.size)
        mappedProduct.size = mapProduct.size
    if (mapProduct.catogory)
        mappedProduct.catogory = mapProduct.catogory
    if (mapProduct.quality)
        mappedProduct.quality = mapProduct.quality
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

