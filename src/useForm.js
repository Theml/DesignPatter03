import { useState } from "react";
export default function useForm(initForm) {
  const [form, setForm] = useState(initForm);

  function handleChangeForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return { form, handleChangeForm };
}
