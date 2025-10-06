
'use client';

import { useEffect, useState } from 'react';
import { productsAPI } from '@/lib/api/endpoints';

export type Product = {
  id?: string;
  slug?: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  colors: string[];
  capacities?: string[];
  description: string;
  specs?: {
    display?: { type: string; diagonal: string; resolution: string; format: string };
    processor?: { type: string; model: string; physicalCores: number; virtualCores: number; process: string };
    ram?: { capacity: string; max: string };
    storage?: { capacity: string };
  };
};

export function useProducts(params?: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getAll(params);
        setProducts(response.data.products);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  return { products, loading, error };
}

export function useProduct(id: string): {
  product: Product | null;
  loading: boolean;
  error: string | null;
} {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getById(id);
        setProduct(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
}

export function useProductReviews(productId: string) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getReviews(productId);
        setReviews(response.data.reviews);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  return { reviews, loading, error };
}