import qr from "qrcode-terminal"

async function handle(err, choose) {
    if (err) {
        console.log("Erro na aplicação");
        return;
    }
    
    const isSmall = choose.type == 2
    qr.generate(choose.link, {small: isSmall}, (qrcode)=>{
        console.log("QR Code gerado com sucesso!\n");
        console.log(qrcode);
    });
}

export default handle;