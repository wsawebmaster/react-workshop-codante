import { useProperties } from "../providers/property-provider";
import NumberOfProperties from "./number-of-properties";
import PropertyCard from "./property-card";

function FeaturedProperties() {
  const properties = useProperties();
  return (
    <section className="min-h-screen py-16 bg-gray-50" id="imoveis">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Imóveis em Destaque <NumberOfProperties properties={properties} />

        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;