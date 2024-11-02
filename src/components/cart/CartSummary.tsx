import React from 'react';
import { Link } from 'react-router-dom';

export default function CartSummary() {
  // Mock data - replace with actual cart calculations
  const subtotal = 199.99;
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="card p-6 space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Link to="/checkout" className="btn-primary block text-center">
        Proceed to Checkout
      </Link>
    </div>
  );
}