import { createClient } from "altogic";

const ENV_URL = "https://cyzr-beiz.c1-europe.altogic.com";
const CLIENT_KEY = "d0db017a228344f193f9f363edfa84c3";
const altogic = createClient(ENV_URL, CLIENT_KEY);

export default altogic;
