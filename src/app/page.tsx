"use client";

import React, { useEffect, useState } from "react";
import {
  Eye,
  Sparkles,
  Truck,
  ShieldCheck,
  Leaf,
  Star,
  Mail,
  Phone,
  MapPin,
  X,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";

interface ProductItem {
  id: string;
  tenantId: string;
  title: string;
  price: number;
  status?: string;
  customFields: {
    badge?: string;
    features?: string[];
    imageUrl?: string;
    description?: string;
    category?: string;
    stock?: number;
  };
  createdAt: string;
}

const seedProducts: ProductItem[] = [
  {
    id: "4cb1a798-a04f-4bc8-8897-1113128cbb89",
    tenantId: "20fee05d-4a1c-485b-955c-e569f8b3badf",
    title: "Aura Pro Wireless Headphones",
    price: 249,
    status: "ACTIVE",
    customFields: {
      badge: "Best Seller",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      description:
        "Lossless spatial audio with adaptive noise cancellation and 40-hour battery life.",
      category: "Audio",
      stock: 50,
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "8f68f7d4-087a-4af3-9f3d-827d5c5ef87b",
    tenantId: "20fee05d-4a1c-485b-955c-e569f8b3badf",
    title: "Zenith Titanium Chrono Watch",
    price: 189.5,
    status: "ACTIVE",
    customFields: {
      badge: "New Release",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      description:
        "Aerospace titanium casing with AMOLED sapphire display and 14-day continuous battery.",
      category: "Wearables",
      stock: 40,
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: "b06bbd7d-f8e2-4613-ace0-96036a83b426",
    tenantId: "20fee05d-4a1c-485b-955c-e569f8b3badf",
    title: "Luminary Ergo Smart Desk Lamp",
    price: 89,
    status: "ACTIVE",
    customFields: {
      badge: "Staff Pick",
      features: [],
      imageUrl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      description:
        "Circadian rhythm smart lighting with integrated 15W wireless rapid charging base.",
      category: "Desk Setup",
      stock: 90,
    },
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  const [products, setProducts] = useState<ProductItem[]>(seedProducts);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data: ProductItem[] = await res.json();
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="font-sans antialiased">
      {/* Announcement Bar */}
      <div className="bg-indigo-600 text-white text-center py-2">
        <span>Free shipping on orders over $99! 🚚</span>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/70 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-semibold text-xl">Aura Tech Labs</span>
          </div>
          <div className="space-x-4">
            <a href="#products" className="text-gray-700 hover:text-indigo-600">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              The Future of Tech Gear
            </h1>
            <p className="text-xl mb-8">
              Experience boundary-pushing audio precision, smart ergonomics, and
              aerospace-grade accessories designed for performance.
            </p>
            <a
              href="#products"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Explore Collection
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
              alt="Hero"
              className="rounded-xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">4.8</h3>
            <p className="text-sm text-gray-600">Avg. Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">120+</h3>
            <p className="text-sm text-gray-600">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">98%</h3>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={product.customFields.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  {product.customFields.badge && (
                    <span className="inline-block bg-indigo-600 text-white text-xs rounded px-2 py-0.5 mb-2">
                      {product.customFields.badge}
                    </span>
                  )}
                  <h3 className="font-semibold text-lg mb-1">
                    {product.title}
                  </h3>
                  <p className="text-indigo-600 font-bold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.customFields.features?.map((f, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-700 text-xs rounded px-2 py-0.5"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <Eye className="mr-1" size={16} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <img
              src={selectedProduct.customFields.imageUrl}
              alt={selectedProduct.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {selectedProduct.title}
            </h3>
            <p className="text-indigo-600 font-bold mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <p className="mb-4">{selectedProduct.customFields.description}</p>
            <ul className="space-y-2 mb-4">
              {selectedProduct.customFields.features?.map((f, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={18} />
                  {f}
                </li>
              ))}
            </ul>
            <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
              <Mail className="mr-2" size={18} />
              Inquire
            </button>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold">Why Choose Aura Tech Labs?</h2>
            <p className="text-gray-700">
              We blend cutting‑edge technology with ergonomic design to deliver
              products that elevate your everyday experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ShieldCheck className="text-indigo-600 mr-2" size={20} />
                <span>Premium Quality</span>
              </li>
              <li className="flex items-center">
                <Zap className="text-indigo-600 mr-2" size={20} />
                <span>Fast Shipping</span>
              </li>
              <li className="flex items-center">
                <Leaf className="text-indigo-600 mr-2" size={20} />
                <span>Eco‑Friendly Materials</span>
              </li>
              <li className="flex items-center">
                <Star className="text-indigo-600 mr-2" size={20} />
                <span>Customer‑First Support</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b