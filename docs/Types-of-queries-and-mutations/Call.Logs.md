---
sidebar_position: 9
---

# Call Logs

## **FETCH QUERY**

```graphql
fetchCallLog(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchCallLogResponse
```

### **Type details**

```graphql
type FetchCallLogResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [CallLog]
}

type CallLog {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
name: String
ownerId: String
statusId: String
relatedTo: [relatedTo]
closedBy: String
closedAt: String
layoutId: String
startedAt: String
endedAt: String
callPurpose: String
callAgenda: String
callResult: String
outgoingCallStatus: String
callType: String
description: Document
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

### Simple Request: To Search Fetch Call Logs record

```graphql
{
  fetchCallLog
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
    "fetchCallLog": {
      "code": 200,
      "messageKey": "calllog-fetch-success",
      "data": [
        {
          "id": "f3ca5d51-97b0-47f0-9534-db57d469e2b1",
          "name": "call Scheduled with Christina Bates (Sample)"
        },
        {
          "id": "62b9e51f-2e32-4a1e-bc23-73d5666a1d32",
          "name": "call Scheduled with Jason Ward (Sample)"
        },
        {
          "id": "fb88e803-f03e-4959-9a9e-9d12cdc64931",
          "name": "call Scheduled with Michael Morgan (Sample)"
        }
      ]
    }
  }
}

### Filters

```graphql
{
  fetchCallLog(filters:[{name:"id",operator:"eq",value:"62b9e51f-2e32-4a1e-bc23-73d5666a1d32"}])
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
    "fetchCallLog": {
      "code": 200,
      "messageKey": "calllog-fetch-success",
      "data": [
        {
          "id": "62b9e51f-2e32-4a1e-bc23-73d5666a1d32",
          "name": "call Scheduled with Jason Ward (Sample)"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getCallLog(
id: String!
): GetCallLogResponse
```

### **Type details**

```graphql
type GetCallLogResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: CallLog
}

### **Argument**

```graphql
id: String!
```

### Sample query for Get Call Logs

```graphql
{ 

  getCallLog(id:"62b9e51f-2e32-4a1e-bc23-73d5666a1d32") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getCallLog": {
      "code": 200,
      "message": "callLog fetch successfully",
      "status": true,
      "data": {
        "id": "62b9e51f-2e32-4a1e-bc23-73d5666a1d32",
        "name": "call Scheduled with Jason Ward (Sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateCallLog(
id: String!
input: UpdateCallLogInput
): SaveCallLogResponse
```

### **Type details**

```graphql
type SaveCallLogResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: CallLog
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateCallLogInput
```

### Sample Request: To Search update Call Logs record

```graphql
mutation { 

  updateCallLog(id:"62b9e51f-2e32-4a1e-bc23-73d5666a1d32" input:{name:"Alfiya test"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateCallLog": {
      "code": 200,
      "message": "callLog updation successfully",
      "status": true,
      "data": {
        "id": "62b9e51f-2e32-4a1e-bc23-73d5666a1d32",
        "name": "Alfiya test"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createCallLog(
input: CreateCallLogInput
): SaveCallLogResponse
```

### **Type details**

```graphql
type SaveCallLogResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: CallLog
errors: String
}
```

### **Argument**

```graphql
input: CreateCallLogInput
```

### Sample Request: To create Call Logs record

```graphql
mutation { 

  createTask(input:{statusId: "41d6eff0-d688-451f-8781-aa7f9ab46110" name:"test01" ownerId:"62b9e51f-2e32-4a1e-bc23-73d5666a1d32"}){code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "createTask": {
      "code": 200,
      "message": "task create successfully",
      "status": true,
      "data": {
        "id": "0129aa41-aa97-47a7-8a69-fafb3072b676",
        "name": "test01"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteCallLog(
id: String
): SaveCallLogResponse
```

### **Type details**

```graphql
type SaveCallLogResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: CallLog
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Call Logs record

```graphql
mutation { 

  deleteCallLog(id:"62b9e51f-2e32-4a1e-bc23-73d5666a1d32") 

  {code message status data{id name}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteCallLog": {
      "code": 200,
      "message": "callLog delete successfully",
      "status": true,
      "data": {
        "id": "62b9e51f-2e32-4a1e-bc23-73d5666a1d32",
        "name": "Alfiya test"
      }
    }
  }
}
```
