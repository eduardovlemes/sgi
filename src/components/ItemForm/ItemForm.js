import { useState } from "react";

export default function ItemForm (){
    const [urlImage, setUrlImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [caterer, setCaterer] = useState([]);
  const [group, setGroup] = useState([]);

    return(
        <div>
      <h2>Cadastrar produto</h2>
      <form>
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
    )
}