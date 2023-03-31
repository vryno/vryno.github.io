---
sidebar_position: 6
---

# Deals

## **FETCH QUERY**

```graphql
fetchDeal(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchDealResponse
```

### **Type details**

```graphql
type FetchDealResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Deal]
}

type Deal {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
name: String
ownerId: String
phoneNumber: String
closedBy: String
closedAt: String
layoutId: String
email: String
contactId: String
organizationId: String
dealSource: String
expectedRevenue: Int
currency: String
amount: Int
dealPipelineId: String
dealStageId: String
expectedClosingDate: String
dealTypeId: String
probability: Int
description: String
}
```

### **Argument**

```graphql
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int

type FetchFilter {
operator: String!
name: String!
value: [String]
logicalOperator: String
}

scalar String

type FetchOrderBy {
name: String!
order: [FetchOrder]
}

scalar String

scalar Int

scalar Int
```

### Simple Request: To Search Fetch Deals record

```graphql
{
  fetchDeal
  {
    code 
    messageKey 
    data{
      id 
      name
    }
  }
}
```

### Sample Response

```graphql
{
  "data": {
    "fetchDeal": {
      "code": 200,
      "messageKey": "deal-search-success",
      "data": [
        {
          "id": "89d1698d-71d4-4b9c-8a9d-dc3ba2351e7e",
          "name": "Daniel Morse (sample)"
        },
        {
          "id": "c4207a12-1702-4b39-bd84-0daef9edb6cc",
          "name": "Jody Sanchez (sample)"
        },
        {
          "id": "934f1ac9-5c55-4040-8185-2a26e6f54a42",
          "name": "Tiffany Ramirez (sample)"
        }
      ]
    }
  }
```

### Filters

```graphql
{
  fetchDeal(filters:[{name:"id",operator:"eq",value:"fdcec74a-0cba-48e9-8a74-85095dd56ee9"}])
  {
    code 
    messageKey 
    data{
      id 
      name
    }
  }
}
```

```graphql
{
  "data": {
    "fetchDeal": {
      "code": 200,
      "messageKey": "deal-search-success",
      "data": []
    }
  }
}
```

## GET QUERY ##

```graphql
getDeal(
id: String!
): GetDealResponse
```

### **Type details**

```graphql
type GetDealResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Deal
}
```

### **Argument**

```graphql
id: String!
```

### Sample query for Get Deal

```graphql
{ 

  getDeal(id:"fdcec74a-0cba-48e9-8a74-85095dd56ee9") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getDeal": {
      "code": 200,
      "message": "deal search successfully",
      "status": true,
      "data": null
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateDeal(
id: String!
input: UpdateDealInput
): SaveDealResponse
```

### **Type details**

```graphql
type SaveDealResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Deal
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateDealInput
```

### Sample Request: To Search update Deal record

```graphql
mutation { 

  updateDeal(id:"9119e15d-407b-44b5-9e6c-76acde9a289b" input:{name:"Davis"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateDeal": {
      "code": 200,
      "message": "deal updation successfully",
      "status": true,
      "data": null
    }
  }
}
```

## CREATE QUERY

```graphql
createDeal(
input: CreateDealInput
): SaveDealResponse
```

### **Type details**

```graphql
type SaveDealResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Deal
errors: String
}
```

### **Argument**

```graphql
input: CreateDealInput
```

### Sample Request: To create Deal record

```graphql
mutation{ 

createDeal(input:{phoneNumber:"1234567890" dealPipelineId:"3c3e5fff-3ed2-4165-94a0-1938d9fbcf64" dealStageId:"1d4dff7a-714a-4e08-a99f-604f1411f2fc" name:"Jiha"  ownerId:"7258c169-27eb-4b62-b5d9-9af889e3e5d6"} ){code message status messageKey data{id name}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "createDeal": {
      "code": 200,
      "message": "deal create successfully",
      "status": true,
      "messageKey": "deal-create-success",
      "data": {
        "id": "87807e2d-989e-4c1f-92b5-e8f135aebea6",
        "name": "Jiha"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteDeal(
id: String
): SaveDealResponse
```

### **Type details**

```graphql
type SaveDealResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Deal
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Deal record

```graphql
mutation { 

  deleteDeal(id:"87807e2d-989e-4c1f-92b5-e8f135aebea6") 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteDeal": {
      "code": 200,
      "message": "deal delete successfully",
      "status": true,
      "data": {
        "id": "87807e2d-989e-4c1f-92b5-e8f135aebea6",
        "name": "Jiha"
      }
    }
  }
}
```