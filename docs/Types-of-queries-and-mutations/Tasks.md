---
sidebar_position: 8
---

# Tasks

## **FETCH QUERY**

```graphql
fetchTask(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchTaskResponse
```

### **Type details**

```graphql
type FetchTaskResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Task]
}

type Task {
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
closedBy: String
closedAt: String
layoutId: String
dueDate: String
reminder: String
priorityId: String
taskTypeId: String
description: Document
repeat: String
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

### Simple Request: To Search Fetch Tasks record

```graphql
{
  fetchTask
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
    "fetchTask": {
      "code": 200,
      "messageKey": "task-fetch-success",
      "data": [
        {
          "id": "e285bd04-9639-4c18-a785-8fb70d4a62cf",
          "name": "Task for Angela Garcia (Sample)"
        },
        {
          "id": "5cb2b811-ca4f-4a04-bca6-d85dca4bcc9c",
          "name": "Task for Heather Lewis (Sample)"
        },
        {
          "id": "333c2f45-ff61-4aae-8ba7-e323fe910072",
          "name": "Task for Jonathan Williams (Sample)"
        }
      ]
    }
  }
}

### Filters

```graphql
{
  fetchTask(filters:[{name:"id",operator:"eq",value:"333c2f45-ff61-4aae-8ba7-e323fe910072"}])
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
    "fetchTask": {
      "code": 200,
      "messageKey": "task-fetch-success",
      "data": [
        {
          "id": "333c2f45-ff61-4aae-8ba7-e323fe910072",
          "name": "Task for Jonathan Williams (Sample)"
        }
      ]
    }
  }
}
```

## GET QUERY ##

```graphql
getTask(
id: String!
): GetTaskResponse
```

### **Type details**

```graphql
type GetTaskResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: Task
}

### **Argument**

```graphql
id: String!
```

### Sample query for Get tasks

```graphql
{ 

  getTask(id:"333c2f45-ff61-4aae-8ba7-e323fe910072") 

  {code message status data{id name ownerId}} 

}
```

### Sample Response

```graphql
{
  "data": {
    "getTask": {
      "code": 200,
      "message": "task fetch successfully",
      "status": true,
      "data": {
        "id": "333c2f45-ff61-4aae-8ba7-e323fe910072",
        "name": "Task for Jonathan Williams (Sample)",
        "ownerId": "c680e0fd-7952-49af-9212-f677355240b3"
      }
    }
  }
}
```

## **UPDATE QUERY**

```graphql
updateTask(
id: String!
input: UpdateTaskInput
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

### **Argument**

```graphql
id: String!
input: UpdateTaskInput
```

### Sample Request: To Search update Organization record

```graphql
mutation { 

  updateTask(id:"333c2f45-ff61-4aae-8ba7-e323fe910072" input:{name:"morph"}) 

  {code message status data{id name }} 

}
```

### Sample Response

```graphql
{
  "data": {
    "updateTask": {
      "code": 200,
      "message": "task updation successfully",
      "status": true,
      "data": {
        "id": "333c2f45-ff61-4aae-8ba7-e323fe910072",
        "name": "morph"
      }
    }
  }
}
```

## CREATE QUERY

```graphql
createTask(
input: CreateTaskInput
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

### **Argument**

```graphql
input: CreateTaskInput
```

### Sample Request: To create Task record

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
