---
sidebar_position: 1
---

## **Access Token**

Access tokens allow your app to access the Graph API. Almost all Graph API endpoints require an access token of some kind, so each time you access an endpoint, your request may require one. They typically perform two functions:

1. They allow your app to access a User's information without requiring the User's password. For example, your app needs a User's email to perform a function. If the User agrees to allow your app to retrieve their email address from Vryno, the User will not need to enter their Vryno password for your app to get their email address.
2. They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.

## **Refresh Tokens with OAuth 2.0**

Vryno supports programmatic refresh tokens for all approved Marketing Developer Platform (MDP) partners.

### **Introduction**

Refresh tokens are used to get a new access token when your current access token expires. For more information, see the OAuth 2.0 'https://tools.ietf.org/html/rfc6749#section-1.5'.


