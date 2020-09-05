function mapUser(mappedData, mapData) {

    if (mapData.firstName)
        mappedData.firstName = mapData.firstName;
    if (mapData.lastName)
        mappedData.lastName = mapData.lastName;
    if (mapData.email)
        mappedData.email = mapData.email;
    if (mapData.gender)
        mappedData.gender = mapData.gender;
    if (mapData.date)
        mappedData.date = new date(mapData.date);
    if (mapData.temporaryAddress || mapData.temporaryAddress)
        mappedData.address = {
            temporaryAddress: mapData.temporaryAddress,
            permanentAddress: mapData.permanentAddress,
        };
    // mappedData.dob = new date(mapData.dob),
    if (mapData.password)
        mappedData.password = mapData.password;
    if (mapData.username)
        mappedData.username = mapData.username;
    if (mapData.gender)
        mappedData.gender = mapData.gender;

    console.log('what comes in mappedData', mappedData)
    return mappedData
}

function mapProd(mappedProduct, mapProduct) {
    if (mapProduct.name)
        mappedProduct.name = mapProduct.name
    if (mapProduct.brand)
        mappedProduct.brand = mapProduct.brand
    if (mapProduct.size)
        mappedProduct.size = mapProduct.size
    if (mapProduct.model)
        mappedProduct.model = mapProduct.model
    if (mapProduct.quality)
        mappedProduct.quality = mapProduct.quality
    if (mapProduct.status)
        mappedProduct.status = mapProduct.status
    if (mapProduct.price)
        mappedProduct.price = mapProduct.price
    if (mapProduct.quantity)
        mappedProduct.quantity = mapProduct.quantity

    return mappedProduct
}

module.exports = {
    product: mapProd,
    user: mapUser
}