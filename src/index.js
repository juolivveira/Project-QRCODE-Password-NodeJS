import prompt from "prompt";
import promptMain from "./prompts/prompt-main.js";
import generateQRCode from "./services/qrcode/generator.js";
import createPassword from "./services/password/create.js";

// seleção de serviço para o e-commerce (QR Code ou Password)
async function main() {
    prompt.get(promptMain, async (err, result) => {

        if (result.select == 1) {
            await generateQRCode();
            }
        if (result.select == 2) {
            await createPassword();
        }
    });

    prompt.start();
}

main();