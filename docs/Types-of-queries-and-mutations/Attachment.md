---
sidebar_position: 2
---

# * Attachment *

Use following query to get attachment
This is a try
## **QUERY**

```graphql
fetchAttachment(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchAttachmentResponse
```

### **Type details**

```graphql
type FetchAttachmentResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [Attachment]
}

type Attachment {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
relatedTo: [relatedTo]
assigneeId: String
name: String
fileName: String
fileKey: String
fileType: String
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

### Request: To Search Attachment record

```graphql
{
  fetchAttachment(filters:[{name:"id",operator:"eq",value:"988baa5c-e547-485e-93be-f00daf9b8fb5"}])
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