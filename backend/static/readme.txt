// schema-generation command
pnpm kysely-codegen --camel-case --dialect=postgres --type-only-imports=true --url=postgres://postgres:password@localhost:5432/dvdrental --out-file=src/models/schema.ts


