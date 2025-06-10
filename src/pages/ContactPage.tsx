import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center">
           <h1 className="text-4xl font-bold">
          <span className="text-green-700">Contá</span>
          <span className="text-red-600">ctanos</span>
        </h1>
          <p className="text-gray-600">¿Tienes preguntas o sugerencias? ¡Estamos para ayudarte!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Mapa e Información de contacto */}
          <div className="space-y-6">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8936432467393!2d-74.08400328523704!3d4.603212843482537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a36ec7e9ed%3A0x9bd4ebdb4d891a87!2sBogotá!5e0!3m2!1ses!2sco!4v1686789157424!5m2!1ses!2sco"
              className="w-full h-64 rounded-xl shadow-lg border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Dirección:</h3>
                <p className="text-gray-600">Cra 10 #23-45, Bogotá, Colombia</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Teléfono:</h3>
                <p className="text-gray-600">+57 300 123 4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Correo:</h3>
                <p className="text-gray-600">contacto@rafaexpress.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
