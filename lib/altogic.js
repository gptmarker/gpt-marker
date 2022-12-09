import { createClient } from 'altogic';

const ENV_URL = process.env.NEXT_PUBLIC_ENV_URL;
const CLIENT_KEY = process.env.NEXT_PUBLIC_CLIENT_KEY;
const altogic = createClient(ENV_URL, CLIENT_KEY);

export default altogic;
