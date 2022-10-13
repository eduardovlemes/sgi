import { useState } from "react";

export default function ItemForm() {
  const [urlImage, setUrlImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [caterer, setCaterer] = useState([]);
  const [group, setGroup] = useState([]);

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

  return (
    <div>
      <h2>Cadastrar produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Url da imagem*
            <input
              required
              type="text"
              placeholder="https://www."
              value={urlImage}
              onChange={(event) => setUrlImage(event.target.value)}
            />
          </label>

          <label className="input-49">
            Nome*
            <input
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Custo unitário*
            <input
              required
              type="number"
              placeholder="8,99"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>

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
        </div>

        <hr></hr>

        <div>
          <label>
            Fornecedor*
            <select
              required
              value={caterer}
              onChange={(event) => setCaterer(event.target.value)}
            >
              <option value="" selected disabled>
                Selecione
              </option>
            </select>
          </label>

          <label>
            Grupo*
            <select
              required
              value={group}
              onChange={(event) => setGroup(event.target.value)}
            >
              <option value="" selected disabled>
                Selecione
              </option>
            </select>
          </label>
        </div>

        <div>
          <button>Salvar</button>
        </div>
      </form>
    </div>
  );
}
