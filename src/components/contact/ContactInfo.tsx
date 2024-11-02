import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="card p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
      <p className="text-gray-600">
        Have questions? We're here to help. Send us a message or contact us using the information below.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">123 Commerce St, City, Country</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">support@modernshop.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}