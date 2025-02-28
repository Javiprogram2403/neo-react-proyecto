import VehicleItem from "./vehicleItem";

export default function VehicleCatalog({ vehicles }) {
  if (!vehicles.length) {
    return <span>no hay vehiculos para mostrar</span>;
  } else {
    return (
      <ul>
        {vehicles.map((v) => (
          <li key={v._id}>
            <VehicleItem vehicle={v}></VehicleItem>
          </li>
        ))}
      </ul>
    );
  }
}
