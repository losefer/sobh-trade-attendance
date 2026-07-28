import { PGlite } from "@electric-sql/pglite";
import * as schema from "./schema";
export declare const db: (import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> & {
    $client: import("pg").Pool;
}) | (import("drizzle-orm/pglite").PgliteDatabase<typeof schema> & {
    $client: PGlite;
});
export * from "./schema";
//# sourceMappingURL=index.d.ts.map