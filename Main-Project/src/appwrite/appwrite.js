import { Account, Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("690435c10030c8f0617e");

const account = new Account(client);
const databases = new Databases(client);

// Lightweight health check to verify connectivity
const ping = () => client.call("get", "/health");

export { account, client, databases, ping };

