import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // fetch("https://api.example.com/contact", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, message }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     alert("Mensagem enviada com sucesso!");
    //   });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Entre em Contato
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-violet-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;