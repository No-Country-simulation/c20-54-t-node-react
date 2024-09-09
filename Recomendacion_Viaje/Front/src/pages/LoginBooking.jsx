import React, { useState } from 'react';
import '../asets/css/LoginBanner.css';

const LoginBooking = () => {
  return (
   <>
       const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-banner">
        <h1>Bienvenido</h1>
        <p>Inicia sesión para continuar</p>
       </div>
       <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
  );
};
   </>
  )
}

export default LoginBooking
