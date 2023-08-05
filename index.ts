import * as fs from "fs"
class ListaDeCosas 
{
  name: string;
  cosas: any[] = [];

  constructor(name: string) 
  {
    // nombre de esta lista
    this.name = name;
  }

  add(nuevaCosa) 
  {
    this.cosas.push(nuevaCosa);
  }

  getCosas() 
  {
    return this.cosas;
  }
}

class Product 
{
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) 
  {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas 
{
  constructor(name: string)
  {
    super(name)
    let contenidoArchivo = fs.readFileSync(__dirname + "products.json").toString()
    let productosJson = JSON.parse(contenidoArchivo);

    productosJson.forEach(element => {this.addProduct(element)})    
  }

  addProduct(producto: Product)
  {
    //let productoEncontrado = this.cosas.find(p => p.)
    this.add(producto);
  }

  getProduct(id: number):Product
  {
    let cosas = this.getCosas();
    return cosas.find(c=>c.id == id);
  }
}

export { ListaDeProductos, Product };
