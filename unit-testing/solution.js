// fungsi terlalu melakukan banyak hal
function addProduct(name, price) {
  // validasi
  validateProductData(name, price);
  
  const savedProduct = saveProduct(name, price);
  return savedProduct; 
}

function validateProductData(name, price) {
  if (!inputIsValid(name, price)) {
    throw new Error('Invalid input - product was not created.');
  }
}

function inputIsValid(name, price) {
  return !isEmpty(name) && hasMinValie(price, 0);
}

function isEmpty(value) {
  return !value || value.trim() === '';
}

function hasMinValue(value, minValue) {
  return value > minValue;
}

function saveProduct(name, price) {
  const product = {
    id: generateRandomId(name),
    name: name,
    price: price
  };
  database.insert('products', product);
  return product;
}

function generateRandomId(baseValue) {
  return baseValue + '_' + Math.random().toString();
}

describe(function() {
  it('return true if an empty name is passed as a value', function() {
    const validationResult = isEmpty('');
    expect(validationResult).toEqual(true);
  })
  
  it('return false if a non-empty name is passed as a value', function() {
    const validationResult = isEmpty('Test');
    expect(validationResult).toEqual(false)
  })
})

describe(function() {
  it('return true if a value above the minValue is provided', function() {
    const validationResult = hasMinValue(10, 8);
    expect(validationResult).toEqual(true);
  })
  
  it('return false if a value below the minValue is provided', function() {
    const validationResult = hasMinValue(5, 8);
    expect(validationResult).toEqual(false)
  })
})

describe(function() {
  it('should create a product for valid names and prices', function() {
    const createdProduct = addProduct('Carpet', 19);
    expect(createdProduct).not.toBeUndefined();
  })
})

function showErrorMessage(message) {
  console.log(message);
}
