const { Client } = require("@notionhq/client");
require("dotenv").config({ path: ".env" });

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function main() {
  const dbIds = {
    papers: process.env.NOTION_PAPERS_DB_ID,
    experiences: process.env.NOTION_EXPERIENCES_DB_ID,
    projects: process.env.NOTION_PROJECTS_DB_ID,
  };

  for (const [name, id] of Object.entries(dbIds)) {
    if (!id) {
      console.log(name + ": NOT SET");
      continue;
    }
    try {
      const db = await notion.databases.retrieve({ database_id: id });
      const props = Object.entries(db.properties).map(
        ([k, v]) => k + " (" + v.type + ")"
      );
      console.log("\n" + name + " (" + id + "):");
      props.forEach((p) => console.log("  " + p));
    } catch (e) {
      console.log(name + ": ERROR - " + e.message);
    }
  }
}
main();
