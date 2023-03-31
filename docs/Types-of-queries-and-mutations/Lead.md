---
sidebar_position: 7
---

# Lead

## **FETCH QUERY**

```graphql
fetchLead(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchLeadResponse
```

### **Type details**

```graphql
type FetchLeadResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Lead]
}

type Lead {
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
firstName: String
email: String
company: String
website: String
statusId: String
sourceId: String
score: Int
priority: String
expectedRevenue: Int
numberOfEmployees: Int
description: String
leadConverted: Boolean
convertedOn: String
convertedBy: String
convertedContactId: String
convertedDealId: String
convertedOrganizationId: String
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

### Simple Request: To Search Fetch Lead record

```graphql
{
  fetchLead
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
    "fetchLead": {
      "code": 200,
      "messageKey": "lead-search-success",
      "data": [
        {
          "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",
          "name": "Marshall (sample)"
        },
        {
          "id": "7c3c97fc-22e8-4cbe-9a1e-2068edd63e04",
          "name": "Martin (sample)"
        }
      ]
    }
  }
}
```

### Filters

```graphql
{
  fetchLead(filters:[{name:"id",operator:"eq",value:"fda1fa19-45ab-4604-9ec2-610014b1fc79"}])
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
    "fetchLead": {
      "code": 200,
      "messageKey": "lead-search-success",
      "data": [
        {
          "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",
          "name": "Marshall (sample)"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getLead(
id: String!
): GetLeadResponse
```

### **Type details**

```graphql
type GetLeadResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Lead
}
```

### **Argument** 

```graphql
id: String!
```

### Sample query for Get Contact

```graphql
{ 

  getLead(id:"fda1fa19-45ab-4604-9ec2-610014b1fc79") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getLead": {
      "code": 200,
      "message": "lead search successfully",
      "status": true,
      "data": {
        "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",
        "name": "Marshall (sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateLead(
id: String!
input: UpdateLeadInput
): SaveLeadResponse
```

### **Type details**

```graphql
type SaveLeadResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Lead
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateLeadInput
```

### Sample Request: To Search update Lead record

```graphql
mutation { 

  updateLead(id:"fda1fa19-45ab-4604-9ec2-610014b1fc79" input:{name:"Davis"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateLead": {
      "code": 200,
      "message": "lead updation successfully",
      "status": true,
      "data": {
        "id": "fda1fa19-45ab-4604-9ec2-610014b1fc79",
        "name": "Davis"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createLead(
input: CreateLeadInput
): SaveLeadResponse
```

### **Type details**

```graphql
type SaveLeadResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Lead
errors: String
}
```

### **Argument**

```graphql
input: CreateLeadInput
```

### Sample Request: To create Lead record

```graphql
mutation { 

  createLead(input:{ name:"test01" ownerId:"fda1fa19-45ab-4604-9ec2-610014b1fc79"}){code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "createLead": {
      "code": 200,
      "message": "lead create successfully",
      "status": true,
      "data": {
        "id": "6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e",
        "name": "test01"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteLead(
id: String
): SaveLeadResponse
```

### **Type details**

```graphql
type SaveLeadResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Lead
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Lead record

```graphql
mutation { 

  deleteLead(id:"6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e") 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteLead": {
      "code": 200,
      "message": "lead delete successfully",
      "status": true,
      "data": {
        "id": "6e788bc0-e8dd-49bb-b409-7cff4ee5cc3e",
        "name": "test01"
      }
    }
  }
}
```

