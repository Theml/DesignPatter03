import React, { useState } from "react";
import useForm from "./useForm";

export default function Cats() {
  const { form, handleChangeForm } = useForm({
    nome: "Felix",
    idade: "",
    peso: ""
  });

  return (
    <div className="list">
      <h1>Cats</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder={"Nome do gato"}
          name="nome"
          value={form.nome}
          onChange={handleChangeForm}
        />
        <input
          placeholder={"Idade do gato"}
          name="idade"
          value={form.idade}
          onChange={handleChangeForm}
        />
        <input
          placeholder={"Peso do gato"}
          name="peso"
          value={form.peso}
          onChange={handleChangeForm}
        />
        <button>Exibir</button>
      </form>
      <div>
        <span>Nome: {form.nome} </span>
        <span>Idade: {form.idade} </span>
        <span>Idade: {form.peso} </span>
      </div>
    </div>
  );
}
