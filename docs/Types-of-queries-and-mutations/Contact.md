---
sidebar_position: 3
---

# * Contact *

## **FETCH QUERY**

```graphql
fetchContact(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchContactResponse
```

### **Type details**

```graphql
type FetchContactResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Contact]
}

type Contact {
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
title: String
firstName: String
dob: String
jobTitle: String
email: String
secondaryEmail: String
skype: String
twitter: String
parentContactId: String
organizationId: String
reportingToId: String
leadSource: String
industryId: String
relationshipTypeId: String
description: String
}
```
### **Argument**

```graphql
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


```

### Simple Request: To Search Fetch Contact record

```graphql
{
  fetchContact
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
    "fetchContact": {
      "code": 200,
      "messageKey": "contact-search-success",
      "data": [
        {
          "id": "ff11c7d9-bec1-4476-87e9-f16f5ca76716",
          "name": "Schmitt (Sample)"
        },
        {
          "id": "fdcec74a-0cba-48e9-8a74-85095dd56ee9",
          "name": "Chambers (Sample)"
        },
        {
          "id": "fd4b9753-87bc-44e9-bee6-1349105d1aa1",
          "name": "Campbell (Sample)"
        }
      ]
    }
  }
}
```

### Filters

```graphql
{
  fetchContact(filters:[{name:"id",operator:"eq",value:"988baa5c-e547-485e-93be-f00daf9b8fb5"}])
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
    "fetchContact": {
      "code": 200,
      "messageKey": "contact-search-success",
      "data": [
        {
          "id": "988baa5c-e547-485e-93be-f00daf9b8fb5",
          "name": "Sheppard (Sample)"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getContact(
id: String!
): GetContactResponse
```

### **Type details**

```graphql
type GetContactResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Contact
}
```

### **Argument** 

```graphql
id: String!
```

### Sample query for Get Contact

```graphql
{ 

  getContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getContact": {
      "code": 200,
      "message": "contact search successfully",
      "status": true,
      "data": {
        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",
        "name": "Davis (Sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateContact(
id: String!
input: UpdateContactInput
): SaveContactResponse
```

### **Type details**

```graphql
type SaveContactResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Contact
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateContactInput
```

### Sample Request: To Search update Contact record

```graphql
mutation { 

  updateContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b" input:{name:"Davis"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateContact": {
      "code": 200,
      "message": "contact updation successfully",
      "status": true,
      "data": {
        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",
        "name": "Davis"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createContact(
input: CreateContactInput
): SaveContactResponse
```

### **Type details**

```graphql
type SaveContactResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Contact
errors: String
}
```

### **Argument**

```graphql
input: CreateContactInput
```

### Sample Request: To create Contact record

```graphql
mutation { 

  createContact(input:{ name:"test01" ownerId:"7258c169-27eb-4b62-b5d9-9af889e3e5d6"}){code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "createContact": {
      "code": 200,
      "message": "contact create successfully",
      "status": true,
      "data": {
        "id": "b3167278-84e6-4724-93fb-1ac9c61d2f02",
        "name": "test01"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteContact(
id: String
): SaveContactResponse
```

### **Type details**

```graphql
type SaveContactResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Contact
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Contact record

```graphql
mutation { 

  deleteContact(id:"9119e15d-407b-44b5-9e6c-76acde9a289b") 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteContact": {
      "code": 200,
      "message": "contact delete successfully",
      "status": true,
      "data": {
        "id": "9119e15d-407b-44b5-9e6c-76acde9a289b",
        "name": "Davis"
      }
    }
  }
}
```

