import React, { useState } from "react";
import useForm from "./useForm";

export default function Dogs() {
  const { form, handleChangeForm } = useForm({
    nome: "",
    idade: ""
  });

  return (
    <div className="list">
      <h1>Dogs</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder={"Nome do doguinho"}
          name="nome"
          value={form.nome}
          onChange={handleChangeForm}
        />
        <input
          placeholder={"Idade do doguinho"}
          name="idade"
          value={form.idade}
          onChange={handleChangeForm}
        />
        <button>Exibir</button>
      </form>
      <div>
        <span>Nome: {form.nome} </span>
        <span>Idade: {form.idade} </span>
      </div>
    </div>
  );
}
