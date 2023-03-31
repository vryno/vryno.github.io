---
sidebar_position: 9
---

# Meetings

## **FETCH QUERY**

```graphql
fetchMeeting(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchMeetingResponse
```

### **Type details**

```graphql
type FetchMeetingResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Meeting]
}

type Meeting {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
name: String
ownerId: String
relatedTo: [relatedTo]
assigneeId: String
statusId: String
layoutId: String
startedAt: String
endedAt: String
attendeesId: [String]
meetingTypeId: String
priorityId: String
reminder: String
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

### Simple Request: To Search Fetch Meetings record

```graphql
{
  fetchMeeting
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
    "fetchMeeting": {
      "code": 200,
      "messageKey": "meeting-fetch-success",
      "data": [
        {
          "id": "83ce0938-326e-4ed9-a1e3-c6edc5c0aed8",
          "name": "Meeting with Shelly Brown (sample)"
        },
        {
          "id": "4da1bca7-d13b-4a2a-8951-816691d83a6d",
          "name": "Meeting with Elizabeth Brock (sample)"
        },
        {
          "id": "31fd819e-9500-4c4b-aa45-ba310602dd5f",
          "name": "Meeting with Ryan Thompson (sample)"
        }
      ]
    }
  }
}

### Filters

```graphql
{
  fetchMeeting(filters:[{name:"id",operator:"eq",value:"31fd819e-9500-4c4b-aa45-ba310602dd5f"}])
  {
    code 
    messageKey 
    data{
      id 
      name
       startedAt
        endedAt
         statusId
    }
  }
}
```

```graphql
{
  "data": {
    "fetchMeeting": {
      "code": 200,
      "messageKey": "meeting-fetch-success",
      "data": [
        {
          "id": "31fd819e-9500-4c4b-aa45-ba310602dd5f",
          "name": "morph",
          "startedAt": "2022-08-17 14:54:38.844522+00:00",
          "endedAt": "2022-08-17 15:54:38.844532+00:00",
          "statusId": "41d6eff0-d688-451f-8781-aa7f9ab46110"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getMeeting(
id: String!
): GetMeetingResponse
```

### **Type details**

```graphql
type GetMeetingResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Meeting
}

### **Argument**

```graphql
id: String!
```

### Sample query for Get Meetings

```graphql
{ 

  getMeeting(id:"31fd819e-9500-4c4b-aa45-ba310602dd5f") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getMeeting": {
      "code": 200,
      "message": "meeting fetch successfully",
      "status": true,
      "data": {
        "id": "31fd819e-9500-4c4b-aa45-ba310602dd5f",
        "name": "Meeting with Ryan Thompson (sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateMeeting(
id: String!
input: UpdateMeetingInput
): SaveMeetingResponse
```

### **Type details**

```graphql
type SaveMeetingResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Meeting
errors: String
}
```

### **Argument**

```graphql
id: String!
input: UpdateMeetingInput
```

### Sample Request: To Search update Meetings record

```graphql
mutation { 

  updateMeeting(id:"31fd819e-9500-4c4b-aa45-ba310602dd5f" input:{name:"morph"}) 

  {code message status data{id name startedAt endedAt}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateMeeting": {
      "code": 200,
      "message": "meeting updation successfully",
      "status": true,
      "data": {
        "id": "31fd819e-9500-4c4b-aa45-ba310602dd5f",
        "name": "morph",
        "startedAt": "2022-08-17 14:54:38.844522+00:00",
        "endedAt": "2022-08-17 15:54:38.844532+00:00"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createMeeting(
input: CreateMeetingInput
): SaveMeetingResponse
```

### **Type details**

```graphql
type SaveMeetingResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Meeting
errors: String
}
```

### **Argument**

```graphql
input: CreateMeetingInput
```

### Sample Request: To create Meeting record

```graphql
mutation { 

  createTask(input:{statusId: "f4dc0ad6-5ad9-4ef8-8f2a-875360e9d2ee" name:"test01" ownerId:"7258c169-27eb-4b62-b5d9-9af889e3e5d6"}){code message status data{id name }} 

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
        "id": "1a8ff2e4-4edc-4c32-a127-23a5edfc3be3",
        "name": "test01"
      }
    }
  }
}
```

## DELETE QUERY

```graphql
deleteTask(
id: String
): SaveTaskResponse
```

### **Type details**

```graphql
type SaveTaskResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Task
errors: String
}
```

### Argument

```graphql
id: String
```

### Sample Request: To delete Task record

```graphql
mutation { 

  deleteTask(id:"1a8ff2e4-4edc-4c32-a127-23a5edfc3be3") 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "deleteTask": {
      "code": 200,
      "message": "task delete successfully",
      "status": true,
      "data": {
        "id": "1a8ff2e4-4edc-4c32-a127-23a5edfc3be3",
        "name": "test01"
      }
    }
  }
}
```
