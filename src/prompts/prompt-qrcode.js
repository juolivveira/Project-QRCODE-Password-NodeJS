
const promptQRCode = [
   {
    name: "link",
    description: ("Digite o link para gerar o QR Code"),
   },

   {
    name: "type",
    description: ("Escolha entre o tipo de QR Code (1 - Normal ou (2 - Terminal"),
    pattern: /^[1-2]+$/,
    message: ("Escolha apenas entre 1 e 2"),
    required: true, 

   }
]

export default promptQRCode;