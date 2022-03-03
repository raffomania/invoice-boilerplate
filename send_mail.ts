import { SmtpClient } from "https://deno.land/x/denomailer@0.9.0/mod.ts";
import { config } from "https://deno.land/std@0.128.0/dotenv/mod.ts";

const env: any = await config({ safe: true });

console.log("using config", env);

const client = new SmtpClient();

await client.connectTLS({
    hostname: env.SMTP_HOST,
    port: env.SMTP_PORT,
    username: env.SMTP_USER,
    password: env.SMTP_PASSWORD,
});

const text = `
Moin ${env.NAME_TO},

Im Anhang die Rechnung für das Projekt ${env.PROJECT} im ${env.TIMESPAN}.

Viele Grüße, ${env.NAME_FROM}
`;

const attachment = await Deno.readFile("output.pdf");
const filename = "invoice.pdf";

await client.send({
    from: env.MAIL_FROM,
    to: env.MAIL_TO,
    subject: `${env.TIMESPAN} Rechnung`,
    content: text,
    attachments: [
        {
            encoding: "binary",
            content: attachment,
            filename,
            contentType: "application/pdf",
        },
    ],
});

await client.close();
