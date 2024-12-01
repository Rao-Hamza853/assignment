'use client';
import { Product } from '@/type';
import { use, useEffect, useState } from 'react';

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const productParams = use(params);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = () => {
      try {
        const storedProducts: Product[] = JSON.parse(
          localStorage.getItem('products') || '[]'
        );
        const matchedProduct = storedProducts.find(
          (product) => product.id === parseInt(productParams.id)
        );

        if (matchedProduct) {
          setSelectedProduct(matchedProduct);
        } else {
          setFetchError('Product not found.');
        }
      } catch (error) {
        setFetchError('Error loading product.');
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [productParams.id]);

  if (isLoading) {
    return (
      <div className='min-h-screen p-8 flex items-center justify-center'>
        <div className='text-lg text-blue-500'>Loading...</div>
      </div>
    );
  }

  if (fetchError || !selectedProduct) {
    return (
      <div className='min-h-screen p-8 flex items-center justify-center'>
        <div className='text-lg text-red-500'>
          {fetchError || 'Product not found.'}
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className="text-3xl font-semibold mb-6 text-purple-600">
          {selectedProduct.name}
        </h1>
        <div className='bg-gray-50 shadow-lg rounded-lg p-6'>
          <p className='text-gray-700 mb-4'>{selectedProduct.description}</p>
          <p className='text-2xl font-bold text-green-500'>
            ${selectedProduct.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
