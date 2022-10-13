import { useState } from "react";

export default function EnterpriseForm() {
  const [corporateName, setCorporateName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [street, setStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [addressCompl, setAddressCompl] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (!corporateName) {
        alert("O preenchimento do campo Razão Social é obrigatório.");
        return;
      } else if (!tradeName) {
        alert("O preenchimento do campo Nome Fantasia é obrigatório.");
        return;
      } else if (!cnpj) {
        alert("O preenchimento do campo CNPJ é obrigatório.");
        return;
      } else if (!email) {
        alert(
          "O preenchimento do campo E-mail é obrigatório. Digite um E-mail válido."
        );
        return;
      } else if (!postalcode) {
        alert("O preenchimento do campo CEP é obrigatório.");
        return;
      } else if (!street) {
        alert("O preenchimento do campo Rua é obrigatório.");
        return;
      } else if (!addressNumber) {
        alert("O preenchimento do campo Número é obrigatório.");
        return;
      } else if (!district) {
        alert("O preenchimento do campo Bairro é obrigatório.");
        return;
      } else if (!city) {
        alert("O preenchimento do campo Cidade é obrigatório.");
        return;
      } else if (!latitude) {
        alert("O preenchimento do campo Latitude é obrigatório.");
        return;
      } else if (!longitude) {
        alert("O preenchimento do campo Longitude é obrigatório.");
        return;
      }
      event.target.checkValidity();
      alert("Empresa cadastrada com sucesso!");
      setCorporateName("");
      setTradeName("");
      setCnpj("");
      setEmail("");
      setPostalcode("");
      setStreet("");
      setAddressNumber("");
      setDistrict("");
      setCity("");
      setAddressCompl("");
      setLatitude("");
      setLongitude("");
    } catch (error) {
      alert("Erro ao cadastrar a empresa. Tente novamente.");
    }

    const sendInformationToServer = fetch("http://localhost:3001/enterprises", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        corporateName: corporateName,
        tradeName: tradeName,
        cnpj: cnpj,
        email: email,
        postalcode: postalcode,
        street: street,
        addressNumber: addressNumber,
        district: district,
        city: city,
        addressCompl: addressCompl,
        latitude: latitude,
        longitude: longitude,
      }),
    });
    console.log(sendInformationToServer);
  }

  

  return (
    <div>
      <h2>Cadastrar empresas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Razão Social*
            <input
              required
              type="text"
              placeholder="DEVinCorp"
              value={corporateName}
              onChange={(event) => setCorporateName(event.target.value)}
            />
          </label>

          <label className="input-32">
            Nome Fantasia*
            <input
              required
              type="text"
              placeholder="Bem Estar Pharma"
              value={tradeName}
              onChange={(event) => setTradeName(event.target.value)}
            />
          </label>

          <label>
            CNPJ*
            <input
              required
              type="number"
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
          </label>
          <label>
            E-mail*
            <input
              required
              type="email"
              placeholder="exemplo@mail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>

        <hr></hr>

        <div>
          <label>
            CEP*
            <input
              required
              type="number"
              placeholder="00.000-000"
              value={postalcode}
              onChange={(event) => setPostalcode(event.target.value)}
            />
          </label>

          <label>
            Logradouro*
            <input
              required
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </label>

          <label>
            Número*
            <input
              required
              type="number"
              value={addressNumber}
              onChange={(event) => setAddressNumber(event.target.value)}
            />
          </label>

          <label>
            Complemento
            <input
              type="text"
              value={addressCompl}
              onChange={(event) => setAddressCompl(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Bairro*
            <input
              required
              type="text"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
            />
          </label>

          <label className="input-25">
            Cidade*
            <input
              required
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
        </div>

        <hr></hr>

        <div>
          <label className="input-5">
            Latitude*
            <input
              required
              type="number"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </label>

          <label>
            Longitude*
            <input
              required
              type="number"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button>Salvar</button>
        </div>
      </form>
    </div>
  );
}
