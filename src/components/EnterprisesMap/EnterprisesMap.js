import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

export default function EnterpriseMap() {
  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    async function getEnterprises() {
      await fetch("http://localhost:3001/enterprises")
        .then((response) => response.json())
        .then((dataEnterprisesServer) => {
          setEnterprises(dataEnterprisesServer);
        });
    }
    getEnterprises();
  }, []);

  return (
    <div className="page-container">
      <h2>Empresas cadastradas</h2>
      <MapContainer
      className="map-container"
        center={[-13.747492, -53.470339]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {enterprises.map((enterprise) => (
          <Marker position={[enterprise.latitude, enterprise.longitude]}>
            <Popup>
              <>
                <p>
                  <strong>Razão Social: </strong>
                  {enterprise.corporateName}
                </p>
                <p>
                  <strong>Nome Fantasia: </strong>
                  {enterprise.tradeName}
                </p>
                <p>
                  <strong>CNPJ: </strong>
                  {enterprise.cnpj}
                </p>
                <p>
                  <strong>Email: </strong>
                  {enterprise.email}
                </p>
                <p>
                  <strong>Endereço: </strong>
                  {enterprise.street}, nº {enterprise.addressNumber} -{" "}
                  {enterprise.district} - {enterprise.city} -{" "}
                  {enterprise.postalcode}
                </p>

                {enterprise.addressCompl !== "" ? (
                  <p>
                    <strong>Compl.: </strong>
                    {enterprise.addressCompl}
                  </p>
                ) : null}
              </>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
