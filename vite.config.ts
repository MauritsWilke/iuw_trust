import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const decoder = new TextDecoder("utf-8")
const keyFile = Deno.readFileSync(`${__dirname}/cert/key.pem`);
const certFile = Deno.readFileSync(`${__dirname}/cert/cert.pem`);

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        https: {
            key: decoder.decode(keyFile),
            cert: decoder.decode(certFile),
        },
        proxy: {}
    }
});
