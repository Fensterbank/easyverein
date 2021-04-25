import test from 'ava';

import { getMember, getMembers, updateMember } from './member';
import { getOrganization } from './organization';

import { setApiToken } from '.';

console.log(`Running tests with API token: ${process.env.EASYVEREIN_TOKEN}`);

test('we can set token', (t) => {
  t.notThrows(() => setApiToken(process.env.EASYVEREIN_TOKEN))
});

test('we can fetch the organization', async (t) => {
  const org = await getOrganization();
  t.truthy(org.name);
  t.false(isNaN(org.id));
});

test('we can fetch the organization with only the short name', async (t) => {
  const org = await getOrganization('{short}');
  t.falsy(org.name);
  t.truthy(org.short);
  t.falsy(org.id);
});

test('we can fetch all members', async (t) => {
  const members = await getMembers();
  // Every member contains the email field and a lot of other fields
  members.map(m => {
    t.truthy(m.id);
    t.truthy(m.email);
  });
  t.true(members.length > 0);
});

test('we can fetch all members with only the id', async (t) => {
  const members = await getMembers('{id}');
  // Every member contains the id field, but not the email field
  members.map(m => {
    t.truthy(m.id);
    t.falsy(m.email);
  });
  t.true(members.length > 0);
});


test('we can fetch a single member by id', async (t) => {
  const id = '414902';
  const member = await getMember(id, '{id,contactDetails{name, privateEmail},email,membershipNumber,memberGroups}');
  t.is<number>(member.id, parseInt(id, 10));
  t.truthy(member.membershipNumber);
  t.truthy(member.email);
  t.falsy(member.joinDate);
});

test('we can change the membership number of a single member', async (t) => {
  const id = 414902;
  const randomMembership = (Math.random() * 100).toFixed();
  const member = await updateMember(id, { membershipNumber: randomMembership })
  t.is<number>(member.id, id);
  t.is(member.membershipNumber, randomMembership);
});
