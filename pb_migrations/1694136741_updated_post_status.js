/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8tl08gwhanvtbk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfftna0i",
    "name": "liked_by",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8tl08gwhanvtbk")

  // remove
  collection.schema.removeField("yfftna0i")

  return dao.saveCollection(collection)
})