# Node API Library for easyVerein®

 <img src="https://easyverein.com/static/logo.png" alt="easyVerein® Logo" height="100">

This is a typed Node.js API Library for the **easyVerein® web service**.  
Since the API is still in [early development](https://easyverein.com/api/v1/), only a few methods are implemented.  

This library is **inofficial** and therefore is **not developed or supported by** [easyVerein®](https://easyverein.com/) or [SD Software-Design GmbH](https://software-design.de/).

## Installation
```bash
yarn add easyverein
```
or
```bash
npm install easyverein
```

## Usage

```typescript
  import { Client, Member, Organization } from 'easyverein';

  // First initialize the Client with the easyVerein® authentication token.
  const client = Client('token');

  // Get the organization
  // Since the organization api routes aren't working properly for normal user accounts,
  // this is done with a workaround. We are fetching the first page of members and return
  // the first member's org property.
  const org: Organization = await client.getOrganization();
  console.log(`
    Our Organization is ${org.name}. Let's use the primary color ${org.primaryColor}
    and secondary color ${org.secondaryColor} to theme some things.`
  );

  // Get all members with a small set of attributes
  const members: Member[] = await client.getMembers(
    ['id', 'contactDetails{name,dateOfBirth}', 'membershipNumber', 'memberGroups', 'joinDate']
  );
  members.forEach(m => console.log(m.contactDetails.name))


  // Get a specific member with two attributes
  const member: Member = await client.getMember('123', ['contactDetails{name}', 'membershipNumber']);
  console.log(`Hello ${member.contactDetails.name}, your membership number is ${member.membershipNumber}.`);
```

## Author & License
MIT License. Built with ❤️ by Frédéric Bolvin, [f-bit software](https://f-bit.software).  
