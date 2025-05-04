# 💪 GYM POWER

Sistema de login e cadastro para controle de treinos com foco em usabilidade, visual moderno e integração com Firebase. Ideal para academias, atletas e projetos fitness.

---

## 🚀 Funcionalidades

- Autenticação com Firebase (email e senha)
- Cadastro com nome, contato e confirmação de senha
- Tela de login com feedback visual de erros
- Armazenamento de dados no Firestore
- Estilo visual escuro com tema neon (verde #9FEA1C)

---

## 🧰 Tecnologias usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firestore](https://firebase.google.com/products/firestore)
- CSS puro com variáveis personalizadas

---

## 📁 Estrutura do projeto

```bash
gympower/
├── public/
├── src/
│   ├── assets/         # Ícones SVG e logo
│   ├── pages/          # Login.jsx, Cadastro.jsx
│   ├── firebase.js     # Configuração Firebase
│   └── App.jsx         # Rotas principais
├── .env                # (não incluso no repositório)
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/guidzn1/gympower.git
cd gympower

# Instale as dependências
npm install

# Crie um arquivo .env com suas credenciais do Firebase
touch .env
```

### ✨ Exemplo de `.env`

```env
VITE_FIREBASE_API_KEY=SUACHAVE
VITE_FIREBASE_AUTH_DOMAIN=SEUDOMINIO.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=SEUID
VITE_FIREBASE_STORAGE_BUCKET=SEUBUCKET.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=SEU_ID
VITE_FIREBASE_APP_ID=SEU_APP_ID
```

> ⚠️ Esse arquivo **não está incluso** no repositório por motivos de segurança. Configure suas próprias credenciais no Firebase.

---

### ▶️ Para rodar localmente:

```bash
npm run dev
```

---

## 📌 Próximos passos

- Dashboard do usuário após login
- Edição de perfil
- Integração com plano de treino personalizado
- Upload de fotos ou progresso físico

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por [@guidzn1](https://github.com/guidzn1) 💚
