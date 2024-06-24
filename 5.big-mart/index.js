import express from "express";

const app = express();

//to make app understand json
app.use(express.json());

// ? product list

let productList = [
  {
    id: 1,
    name: "Bread",
    price: 100,
  },
];

// ?get product list
app.get("/product/list", (req, res) => {
  //this is call back function
  return res.status(200).send({ message: "Success", productList });
});

// ? add product list
app.post("/product/add", (req, res) => {
  console.log(req.body);
  productList.push(req.body);
  return res.status(200).send({ message: "Product is added successfully" });
});

// ? get product detail by id
app.get("/product/detail/:id", (req, res) => {
  const productId = Number(req.params.id);
  console.log(req.params); //   { id: '2' } where id is :id and 2 is from the route provided

  const product = productList.find((item) => {
    return item.id === productId;
  });

  if (!product) {
    return res.status(404).send({ message: "Product does not exit" });
  }

  return res
    .status(200)
    .send({ message: "Item extracted", productDetail: product });
});

// ?delete product
app.delete("/product/delete/:id", (req, res) => {
  console.log(req.params);
  // extract product id from req.params and convert to number type

  const productId = Number(req.params.id);

  // find product using product id

  const product = productList.find((item) => {
    return item.id === productId;
  });

  // if not product, throw error
  if (!product) {
    return res.status(404).send({ message: "Product does not exist" });
  }

  //   delete product

  const newProductList = productList.filter((item) => {
    return item.id !== productId;
  });

  productList = structuredClone(newProductList);

  // send res

  return res.status(200).send({ message: "Deleted" });
});

// ? edit a product
app.put("/product/edit/:id", (req, res) => {
  // extract product id from req.params and convert to number type
  const productId = Number(req.params.id);

  // find product using product id
  const product = productList.find((item) => {
    return item.id === productId;
  });

  // if not product, throw error
  if (!product) {
    return res.status(404).send({ message: "Product does not exist" });
  }

  // extract new values from req.body
  const newValues = req.body;

  // edit product
  const newProductList = productList.map((item) => {
    if (item.id === productId) {
      return { ...item, ...newValues };
    }
    return { ...item };
  });

  productList = structuredClone(newProductList);

  // send res
  return res.status(200).send({ message: "Editing", product: productList });
});

// ?network port and server
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
