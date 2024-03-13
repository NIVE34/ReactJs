import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialValues }) => {
  const [product, setProduct] = useState(initialValues || { id: '', name: '', category: '', price: '', stockQuantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.category || !product.price || !product.stockQuantity) {
      alert('Please fill in all fields');
      return;
    }
    if (!product.id) {
      alert('ID is required');
      return;
    }
    onSubmit(product);
    setProduct({ id: '', name: '', category: '', price: '', stockQuantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flexBasis: '20%' }}>ID:</label>
        <input type="number" name="id" value={product.id} onChange={handleChange} style={{ flexBasis: '70%' }} />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flexBasis: '20%' }}>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} style={{ flexBasis: '70%' }} />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flexBasis: '20%' }}>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} style={{ flexBasis: '70%' }} />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flexBasis: '20%' }}>Price:</label>
        <input type="number" step="0.01" name="price" value={product.price} onChange={handleChange} style={{ flexBasis: '70%' }} />
      </div>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ flexBasis: '20%' }}>Stock Quantity:</label>
        <input type="number" name="stockQuantity" value={product.stockQuantity} onChange={handleChange} style={{ flexBasis: '70%' }} />
      </div>
      <button type="submit" style={{ padding: '5px 10px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Submit</button>
    </form>
  );
};

export default ProductForm;







