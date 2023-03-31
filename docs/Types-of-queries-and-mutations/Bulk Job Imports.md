---
sidebar_position: 1
---

# Bulk Import Jobs

## **QUERY**

```graphql
fetchBulkImportJob(
filters: [FetchFilter]
expression: String
orderBy: [FetchOrderBy]
customViewId: String
pageNumber: Int
recordsPerPage: Int
): FetchBulkImportJobResponse
```

### **Type details**

```graphql
type FetchBulkImportJobResponse {
code: Int!
message: String!
status: Boolean!
messageKey: String!
data: [BulkImportJob]
}

type BulkImportJob {
id: String
recordStatus: String
createdBy: String
createdAt: String
updatedBy: String
updatedAt: String
requestId: String
moduleUniqueName: String
fileName: String
fileKey: String
mappingId: String
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
  fetchBulkImportJob
  {
    code 
    messageKey 
    data{
      id 
      fileName
    }
  }
}
```

### Sample Response

```graphql
{
  "data": {
    "fetchBulkImportJob": {
      "code": 200,
      "messageKey": "bulkimportjob-search-success",
      "data": []
    }
  }
}
```