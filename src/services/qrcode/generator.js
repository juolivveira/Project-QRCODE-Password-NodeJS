import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js"

async function generateQRCode() {
    prompt.get(promptQRCode, handle);

    prompt.start();

}

export default generateQRCode;