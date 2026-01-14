import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Search, Navigation } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const stores = [
  {
    id: 1,
    name: 'Jollibee SM Mall of Asia',
    address: 'SM Mall of Asia, Bay City, Pasay City',
    phone: '(02) 8556-7890',
    hours: '10:00 AM - 10:00 PM',
    distance: '2.5 km',
  },
  {
    id: 2,
    name: 'Jollibee Ayala Makati',
    address: 'Ayala Center, Makati City',
    phone: '(02) 8555-1234',
    hours: '9:00 AM - 11:00 PM',
    distance: '4.2 km',
  },
  {
    id: 3,
    name: 'Jollibee Ortigas Center',
    address: "Robinson's Galleria, Ortigas Center, Pasig City",
    phone: '(02) 8557-4567',
    hours: '10:00 AM - 9:00 PM',
    distance: '5.8 km',
  },
  {
    id: 4,
    name: 'Jollibee BGC',
    address: 'High Street, Bonifacio Global City, Taguig',
    phone: '(02) 8558-9012',
    hours: '8:00 AM - 12:00 AM',
    distance: '6.1 km',
  },
  {
    id: 5,
    name: 'Jollibee Eastwood',
    address: 'Eastwood City Walk, Quezon City',
    phone: '(02) 8559-3456',
    hours: '10:00 AM - 10:00 PM',
    distance: '7.3 km',
  },
];

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find a Store
          </h1>
          <p className="text-white/90 max-w-md mx-auto mb-8">
            Locate the nearest Jollibee branch near you
          </p>
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter your location..."
              className="pl-12 py-6 text-lg rounded-full bg-white border-0 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Store List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {stores.length} stores found near you
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Navigation className="h-4 w-4" />
              Use My Location
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-card rounded-2xl shadow-card p-6 hover:shadow-primary transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {store.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                        {store.address}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {store.hours}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        {store.phone}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {store.distance}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Order from here
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Get Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;