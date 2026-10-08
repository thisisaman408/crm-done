const { Client } = require('pg');
async function main() {
  const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_7SDznAEcRGM8@ep-icy-firefly-b4ffdqqz.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&connect_timeout=30"
  });
  await client.connect();
  const res = await client.query('SELECT name, address, "createdAt" FROM "Project" ORDER BY "createdAt" DESC LIMIT 5;');
  console.log(res.rows);
  await client.end();
}
main().catch(console.error);
