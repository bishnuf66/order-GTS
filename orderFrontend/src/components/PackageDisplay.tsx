// type for  package
interface Package {
  items: string[];
  totalWeight: number;
  totalPrice: number;
  courierPrice: number;
}

interface PackageDisplayProps {
  packages: Package[];
}

const PackageDisplay: React.FC<PackageDisplayProps> = ({ packages }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      {packages.length === 0 ? (
        <p>No packages yet.</p>
      ) : (
        packages.map((pkg, index) => (
          <div key={index}>
            <h3>Package {index + 1}</h3>
            <p>Items: {pkg.items.join(", ")}</p>
            <p>Total Weight: {pkg.totalWeight}g</p>
            <p>Total Price: ${pkg.totalPrice}</p>
            <p>Courier Price: ${pkg.courierPrice}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PackageDisplay;
