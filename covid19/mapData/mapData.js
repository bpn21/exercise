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
        mappedData.gender = mapData.gender
    if (mapData.role)
        mappedData.role = mapData.role

    console.log('what comes in mappedData', mappedData)
    return mappedData
}

function mapProd(mappedProduct, mapProduct) {
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

module.exports = {
    product: mapProd,
    user: mapUser
}