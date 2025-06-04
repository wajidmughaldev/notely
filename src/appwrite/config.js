import { Client, Databases } from "appwrite";

const client = new Client()
client
    // .setEndpoint(import.meta.env.VITE_APPWRITE_PUBLIC_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
    // .setKey  (import.meta.env.VITE_APPWRITE_API_KEY);
    .setDevKey  (import.meta.env.VITE_APPWRITE_DEV_KEY);

const database = new Databases(client)

export {client,database}