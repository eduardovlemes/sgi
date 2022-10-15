import { useEffect, useState } from "react";

export default function ItemForm() {
  const [urlImage, setUrlImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [caterer, setCaterer] = useState("");
  const [group, setGroup] = useState("");
  const [catererOptions, setCatererOptions] = useState([]);
  const [groupOptions, setGroupOptions] = useState([]);

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (!urlImage) {
        alert("O preenchimento do campo Url da imagem é obrigatório.");
        return;
      } else if (!name) {
        alert("O preenchimento do campo Laboratório é obrigatório.");
        return;
      } else if (!price) {
        alert("O preenchimento do campo Dosagem é obrigatório.");
        return;
      } else if (!description) {
        alert("O preenchimento do campo Tipo é obrigatório.");
        return;
      } else if (!caterer) {
        alert("O preenchimento do campo Preço é obrigatório.");
        return;
      } else if (!group) {
        alert("O preenchimento do campo Preço é obrigatório.");
        return;
      }
      event.target.checkValidity();
      alert("Produto cadastrado com sucesso!");
      setUrlImage("");
      setName("");
      setPrice("");
      setDescription("");
      setCaterer("");
      setGroup("");
    } catch (error) {
      alert("Erro no cadastro do produto. Tente novamente.");
    }

    const sendInformationToServer = fetch("http://localhost:3001/items", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        urlImage: urlImage,
        name: name,
        price: price,
        description: description,
        caterer: caterer,
        group: group,
      }),
    });
    console.log(sendInformationToServer);
  }

  useEffect(() => {
    async function getCaterer() {
      await fetch("http://localhost:3001/caterers")
        .then((response) => response.json())
        .then((dataCaterersServer) => {
          setCatererOptions(dataCaterersServer);
        });
    }
    getCaterer();
  }, []);

  useEffect(() => {
    async function getGroup() {
      await fetch("http://localhost:3001/groups")
        .then((response) => response.json())
        .then((dataGroupsServer) => {
          setGroupOptions(dataGroupsServer);
        });
    }
    getGroup();
  }, []);

  return (
    <div className="page-container">
      <h2>Cadastrar produto</h2>
      <div className=".item-image">
        {urlImage && (
          <img src={urlImage} alt="user" width={150} />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <label className="input-100">
            Url da imagem*
            <input
              required
              type="text"
              placeholder="https://www."
              value={urlImage}
              onChange={(event) => setUrlImage(event.target.value)}
            />
          </label>
        </div>
        <div className="form-line">
          <label className="input-66">
            Nome*
            <input
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className="input-32">
            Custo unitário*
            <input
              required
              type="number"
              placeholder="8,99"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
        </div>

        <label>
          Descrição
          <textarea
            type="text"
            rows={5}
            placeholder="Digite uma descrição sobre o produto."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <hr></hr>

        <div className="form-line">
          <label className="input-49">
            Fornecedor*
            <select
              required
              value={caterer}
              onChange={(event) => setCaterer(event.target.value)}
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {catererOptions.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="input-49">
            Grupo*
            <select
              required
              value={group}
              onChange={(event) => setGroup(event.target.value)}
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {groupOptions.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="buttons-form">
          <button className="button-save">Salvar</button>
        </div>
      </form>
    </div>
  );
}
