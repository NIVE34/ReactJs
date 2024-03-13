import React, { useState } from 'react';
import ProductForm from './ProductForm';

const ProductsManagement = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 799.99, stockQuantity: 50 },
    { id: 2, name: 'Desk Chair', category: 'Furniture', price: 149.99, stockQuantity: 100 },
    { id: 3, name: 'Printer', category: 'Office Supplies', price: 299.99, stockQuantity: 30 },
    { id: 4, name: 'Conference Table', category: 'Furniture', price: 899.99, stockQuantity: 20 },
    { id: 5, name: 'Smartphone', category: 'Electronics', price: 699.99, stockQuantity: 70 },
    { id: 6, name: 'Filing Cabinet', category: 'Furniture', price: 199.99, stockQuantity: 40 },
    { id: 7, name: 'Whiteboard', category: 'Office Supplies', price: 49.99, stockQuantity: 60 },
    { id: 8, name: 'Headphones', category: 'Electronics', price: 99.99, stockQuantity: 80 },
    { id: 9, name: 'Standing Desk', category: 'Furniture', price: 499.99, stockQuantity: 15 },
    { id: 10, name: 'External Hard Drive', category: 'Electronics', price: 129.99, stockQuantity: 25 }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false); 

  const addProduct = (product) => {
    setProducts([...products, product]);
    setShowProductForm(false); 
  };

  const editProduct = (index, product) => {
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
    setEditingProduct(null);
    setShowProductForm(false); 
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <div className="background"></div>
      <h1 className="centered-text">Products Management</h1>
      <button
        className="add-product-btn"
        onClick={() => setShowProductForm(true)}
        style={{ position: 'absolute', top: '60px', right: '20px' }}
      >
        Add Product
      </button>
      
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #000' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Category</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Stock Quantity</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>{product.id}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{product.name}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{product.category}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>${product.price}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{product.stockQuantity}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
              <button className="edit-button" style={{ marginRight: '5px' }} onClick={() => {setEditingProduct(index); setShowProductForm(true);}}>Edit</button>
<button className="delete-button" onClick={() => deleteProduct(index)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      {showProductForm && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => setShowProductForm(false)}>Close</button>
            {editingProduct !== null ? (
              <ProductForm onSubmit={(product) => editProduct(editingProduct, product)} initialValues={products[editingProduct]} />
            ) : (
              <ProductForm onSubmit={addProduct} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsManagement;
