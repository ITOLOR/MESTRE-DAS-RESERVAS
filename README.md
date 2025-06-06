#MESTRE DAS RESERVAS
Mestre das Reservas é uma aplicação web desenvolvida para automatizar o processo de reservas em restaurantes. O sistema permite que os clientes façam reservas online e recebam confirmações automáticas via WhatsApp. O objetivo é melhorar a organização, reduzir o tempo de espera e aumentar a eficiência no atendimento.

---

## 📋 Requisitos

Antes de começar, você precisa ter instalado:
- **Node.js** (v14 ou superior): [Download Node.js](https://nodejs.org/)
- **NPM** (gerenciador de pacotes do Node.js)
- **Twilio Account**: [Crie uma conta no Twilio](https://www.twilio.com/try-twilio)
- **Ngrok** (para expor seu servidor local à internet): [Download Ngrok](https://ngrok.com/download)
- **Git** (para clonar o repositório): [Download Git](https://git-scm.com/)

---

## ⚙️ Configuração do Projeto

### 1. Clone o Repositório

Clone o projeto para sua máquina local:

```bash
git clone https://github.com/seu-usuario/mercado-whatsapp.git
cd mercado-whatsapp
```

---

### 2. Instale as Dependências

No diretório do projeto, instale as dependências necessárias:

```bash
npm install
```

---

### 3. Configuração do Twilio

#### **1. Crie uma Conta no Twilio**
- Acesse o [Twilio Console](https://www.twilio.com/console) e crie uma conta.
- Configure o **WhatsApp Sandbox**:
  - Acesse **Messaging > Try It Out > WhatsApp Sandbox**.
  - Conecte seu número ao Sandbox enviando a mensagem fornecida no Twilio para o número especificado.

#### **2. Obtenha as Credenciais do Twilio**
No painel do Twilio, copie:
- **Account SID**
- **Auth Token**
- **Sandbox Number**

---

### 4. Configuração do Arquivo `.env`

Crie um arquivo `.env` no diretório raiz do projeto:

```bash
touch .env
```

Adicione as seguintes variáveis ao arquivo `.env`:

```plaintext
TWILIO_ACCOUNT_SID=SEU_ACCOUNT_SID
TWILIO_AUTH_TOKEN=SEU_AUTH_TOKEN
TWILIO_PHONE_NUMBER=+SEU_NUMERO_TWILIO
```

Substitua `SEU_ACCOUNT_SID`, `SEU_AUTH_TOKEN` e `SEU_NUMERO_TWILIO` pelas credenciais do Twilio que você obteve anteriormente.

> **Nota:** O arquivo `.env` não deve ser enviado ao GitHub! Adicione o `.env` ao arquivo `.gitignore`.

---

### 5. Executar o Servidor Localmente

#### **1. Inicie o Servidor**

Execute o seguinte comando para iniciar o servidor:

```bash
node src/server.js
```

Se tudo estiver configurado corretamente, você verá no terminal:

```plaintext
Server running on port 3000
```

#### **2. Exponha o Servidor com Ngrok**

Para que o Twilio consiga se comunicar com seu servidor local, é necessário expô-lo à internet usando o **Ngrok**.

1. Baixe e instale o Ngrok: [Download Ngrok](https://ngrok.com/download)
2. Inicie o Ngrok:
   ```bash
   ngrok http 3000
   ```
3. Copie o **URL gerado pelo Ngrok** (algo como `https://abc123.ngrok.io`) e configure-o no Twilio.

---

### 6. Configurar o Twilio Webhook

No painel do Twilio:
1. Vá para **Messaging > Sandbox Configuration**.
2. No campo **"When a message comes in"**, insira a URL gerada pelo Ngrok seguida de `/webhook`. Por exemplo:
   ```
   https://abc123.ngrok.io/webhook
   ```
3. Clique em **Save** para salvar as alterações.

Agora, todas as mensagens enviadas para o número do Twilio serão encaminhadas para o servidor local.

---

## 📤 Como Funciona o Bot

O bot responde a mensagens no WhatsApp com base nas opções fornecidas. O fluxo é implementado no arquivo `webhook.js`:

- **Mensagem inicial:**
  ```plaintext
  Olá! Escolha uma opção:
  1. Ver categorias
  2. Ver carrinho
  3. Finalizar pedido
  ```

- **Respostas Automáticas:**
  - Opção 1: "Você escolheu categorias. [Frutas, Verduras, Bebidas]"
  - Opção 2: "Seu carrinho está vazio."
  - Opção 3: "Por favor, envie seu endereço."

---

## 📄 Estrutura do Projeto

```plaintext
mercado-whatsapp/
├── src/
│   ├── routes/
│   │   └── webhook.js       # Lógica de resposta para mensagens
│   └── server.js            # Configuração principal do servidor
├── node_modules/            # Dependências instaladas pelo NPM
├── .env                     # Configurações sensíveis (Twilio)
├── .gitignore               # Arquivos ignorados no repositório
├── package.json             # Configurações do projeto e scripts NPM
└── README.md                # Documentação do projeto
```

---

## 🛠️ Ferramentas e Tecnologias

- **Node.js**: Para rodar o servidor.
- **Express**: Framework para lidar com rotas.
- **Twilio API**: Para integração com o WhatsApp.
- **Ngrok**: Para expor o servidor local à internet.

---

## 🖊️ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

---

## 🛡️ Licença

Este projeto está sob a licença **MIT**.
