import { IntegrationBase, SqlQuery } from "@budibase/types"

//@ts-ignore
import Surreal from "surrealdb.js"

interface SurrealConfig {
  host: string
  port: number
  user: string
  password: string
  namespace: string
  database: string
}

class CustomIntegration implements IntegrationBase {
  private readonly config: SurrealConfig
  private readonly db: any

  constructor(config: SurrealConfig) {
    this.config = config
    this.db = new Surreal(`${this.config.host}:${this.config.port}/rpc`)
  }

  async useDb() {
    await this.db.signin({
      user: this.config.user,
      pass: this.config.password
    })
    await this.db.use(this.config.namespace, this.config.database)
  }

  async create(query: { collection: string, body: string }) {
    await this.useDb()
    return await this.db.create(query.collection, JSON.parse(query.body))
  }

  async read(query: { collection: string }) {
    await this.useDb()
    return await this.db.select(query.collection)
  }

  async update(query: { collection: string, body: string }) {
    await this.useDb()
    return await this.db.update(query.collection, JSON.parse(query.body))
  }

  async change(query: { collection: string, body: string }) {
    await this.useDb()
    return await this.db.change(query.collection, JSON.parse(query.body))
  }

  async modify(query: { collection: string, body: string }) {
    await this.useDb()
    return await this.db.modify(query.collection, JSON.parse(query.body))
  }

  async delete(query: { collection: string }) {
    await this.useDb()
    return await this.db.delete(query.collection)
  }

  async advancedQuery(query: SqlQuery) {
    await this.useDb()
    return await this.db.query(query.sql)
  }
}

export default CustomIntegration
