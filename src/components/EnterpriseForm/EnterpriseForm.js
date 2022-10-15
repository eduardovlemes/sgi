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

  async function handleAddress() {
    try {
      await fetch(
        `https://viacep.com.br/ws/${postalcode.replace(/[^0-9]/, "")}/json/`
      )
        .then((response) => response.json())
        .then((dataViaCep) => {
          setStreet(dataViaCep.logradouro);
          setDistrict(dataViaCep.bairro);
          setCity(dataViaCep.localidade);
        })
        .then(
          await fetch(
            `https://nominatim.openstreetmap.org/search.php?q=${postalcode}+${street}+${district}+brazil&format=json`
          )
            .then((response) => response.json())
            .then((dataNominatim) => {
              setLatitude(dataNominatim[0].lat);
              setLongitude(dataNominatim[0].lon);
            })
        );
    } catch (error) {
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  return (
    <div className="page-container">
      <h2>Cadastrar empresas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <label className="input-49">
            Razão Social*
            <input
              required
              type="text"
              placeholder="DEVinCorp"
              value={corporateName}
              onChange={(event) => setCorporateName(event.target.value)}
            />
          </label>

          <label className="input-49">
            Nome Fantasia*
            <input
              required
              type="text"
              placeholder="Bem Estar Pharma"
              value={tradeName}
              onChange={(event) => setTradeName(event.target.value)}
            />
          </label>
        </div>

        <div className="form-line">
          <label className="input-49">
            CNPJ*
            <input
              required
              type="number"
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
          </label>

          <label className="input-49">
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

        <div className="form-line">
          <label className="input-32">
            CEP*
            <input
              required
              type="number"
              placeholder="00.000-000"
              onBlur={handleAddress}
              value={postalcode}
              onChange={(event) => setPostalcode(event.target.value)}
            />
          </label>

          <label className="input-66">
            Logradouro*
            <input
              required
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </label>
        </div>

        <div className="form-line">
          <label className="input-32">
            Número*
            <input
              required
              type="number"
              value={addressNumber}
              onChange={(event) => setAddressNumber(event.target.value)}
            />
          </label>

          <label className="input-32">
            Bairro*
            <input
              required
              type="text"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
            />
          </label>

          <label className="input-32">
            Cidade*
            <input
              required
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
        </div>

        <div className="form-line">
          <label className="input-100">
            Complemento
            <input
              type="text"
              value={addressCompl}
              onChange={(event) => setAddressCompl(event.target.value)}
            />
          </label>
        </div>

        <hr></hr>

        <div className="form-line">
          <label className="input-49">
            Latitude*
            <input
              required
              type="number"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </label>

          <label className="input-49">
            Longitude*
            <input
              required
              type="number"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            />
          </label>
        </div>
        <div className="buttons-form">
          <button className="button-save">Salvar</button>
        </div>
      </form>
    </div>
  );
}
