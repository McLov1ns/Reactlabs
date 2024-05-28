import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.login) errors.login = 'Логин отсутствует';
    else if (formData.login.length < 6 || formData.login.length > 20)
      errors.login = 'Логин должен быть от 6 до 20 символов';
    else if (!/^[a-zA-Z0-9]+$/.test(formData.login))
      errors.login = 'Логин должен содержать только буквы латинского алфавита и цифры';

    if (!formData.password) errors.password = 'Пароль отсутствует';

    if (!formData.confirmPassword) errors.confirmPassword = 'Подтверждение пароля отсутствует';
    else if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Пароли не совпадают';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Форма успешно отправлена!');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Логин:
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
          />
          {errors.login && <span>{errors.login}</span>}
        </label>
      </div>
      <div>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </label>
      </div>
      <div>
        <label>
          Подтвердите пароль:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
      </div>
      <button type="submit">Регистрация</button>
    </form>
  );
};

export default RegistrationForm;
