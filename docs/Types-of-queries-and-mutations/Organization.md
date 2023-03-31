---
sidebar_position: 5
---

# Organization

## **FETCH QUERY**

```graphql
fetchOrganization(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchOrganizationResponse
```

### **Type details**

```graphql
type FetchOrganizationResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Organization]
}

type Organization {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
recordImage: String
name: String
ownerId: String
phoneNumber: String
billingAddress: String
billingCity: String
billingState: String
billingCountry: String
billingZipcode: String
shippingAddress: String
shippingCity: String
shippingState: String
shippingCountry: String
shippingZipcode: String
layoutId: String
email: String
website: String
linkedin: String
parentOrganizationId: String
industryId: String
employees: Int
currency: String
taxNumber: String
registrationNumber: String
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

### Simple Request: To Search Fetch Organization record

```graphql
{
  fetchOrganization
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
    "fetchOrganization": {
      "code": 200,
      "messageKey": "organization-search-success",
      "data": [
        {
          "id": "2429102d-5dde-4206-a080-a7fba225e4f9",
          "name": "syndicate next-generation functionalities (Sample)"
        },
        {
          "id": "478c6cfd-a326-44f4-b2df-2256f23cf36c",
          "name": "whiteboard bleeding-edge relationships (Sample)"
        },
        {
          "id": "2e528360-f45c-463a-9e7c-d3f136e72a69",
          "name": "morph dot-com architectures (Sample)"
        }
      ]
    }
  }
}

### Filters

```graphql
{
  fetchOrganization(filters:[{name:"id",operator:"eq",value:"2429102d-5dde-4206-a080-a7fba225e4f9"}])
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
    "fetchOrganization": {
      "code": 200,
      "messageKey": "organization-search-success",
      "data": [
        {
          "id": "2429102d-5dde-4206-a080-a7fba225e4f9",
          "name": "syndicate next-generation functionalities (Sample)"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getOrganization(
id: String!
): GetOrganizationResponse
```

### **Type details**

```graphql
type GetOrganizationResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Organization
}

### **Argument**

```graphql
id: String!
```

### Sample query for Get Organization

```graphql
{ 

  getOrganization(id:"2e528360-f45c-463a-9e7c-d3f136e72a69") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getOrganization": {
      "code": 200,
      "message": "organization search successfully",
      "status": true,
      "data": {
        "id": "2e528360-f45c-463a-9e7c-d3f136e72a69",
        "name": "morph dot-com architectures (Sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateOrganization(
id: String!
input: UpdateOrganizationInput
): SaveOrganizationResponse
```

### **Type details**

```graphql
type SaveOrganizationResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Organization
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateOrganizationInput
```

### Sample Request: To Search update Organization record

```graphql
mutation { 

  updateOrganization(id:"2e528360-f45c-463a-9e7c-d3f136e72a69" input:{name:"morph"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateOrganization": {
      "code": 200,
      "message": "organization updation successfully",
      "status": true,
      "data": {
        "id": "2e528360-f45c-463a-9e7c-d3f136e72a69",
        "name": "morph"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createOrganization(
input: CreateOrganizationInput
): SaveOrganizationResponse
```

### **Type details**

```graphql
type SaveOrganizationResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Organization
errors: String
}
```

### **Argument**

```graphql
input: CreateOrganizationInput
```

### Sample Request: To create Organization record

```graphql
mutation { 

  createOrganization(input:{ name:"test01" ownerId:"7258c169-27eb-4b62-b5d9-9af889e3e5d6"}){code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "createOrganization": {
      "code": 200,
      "message": "organization create successfully",
      "status": true,
      "data": {
        "id": "04048ece-cdfa-4d67-aeea-8b4b3602ad45",
        "name": "test01"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteOrganization(
id: String
): SaveOrganizationResponse
```

### **Type details**

```graphql
type SaveOrganizationResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Organization
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Organization record

```graphql
mutation { 

  deleteOrganization(id:"04048ece-cdfa-4d67-aeea-8b4b3602ad45") 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteOrganization": {
      "code": 200,
      "message": "organization delete successfully",
      "status": true,
      "data": {
        "id": "04048ece-cdfa-4d67-aeea-8b4b3602ad45",
        "name": "test01"
      }
    }
  }
}
```
