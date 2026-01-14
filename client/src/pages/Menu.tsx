import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import MenuCard from '@/components/MenuCard';
import { menuItems, menuCategories, getItemsByCategory } from '@/data/menuData';

const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'all';

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all' 
      ? menuItems 
      : getItemsByCategory(activeCategory);
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }
    
    return items;
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-white/90 max-w-md mx-auto mb-8">
            Discover the taste that Filipinos love
          </p>
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg rounded-full bg-white border-0 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-16 md:top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => handleCategoryChange('all')}
              className={`shrink-0 rounded-full ${
                activeCategory === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : ''
              }`}
            >
              🍽️ All Items
            </Button>
            {menuCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 rounded-full gap-2 ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-primary-foreground' 
                    : ''
                }`}
              >
                {cat.icon} {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter
              </p>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;