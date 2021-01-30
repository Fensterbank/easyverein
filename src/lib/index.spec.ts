import test from 'ava';

import { getMembers } from './member';
import { getOrganization } from './organization';

import { setApiToken } from '.';

console.log(`Running tests with API token: ${process.env.EASYVEREIN_TOKEN}`);

test('we can set token', (t) => {
  t.notThrows(() => setApiToken(process.env.EASYVEREIN_TOKEN))
})

test('we can fetch the organization', async (t) => {
  const org = await getOrganization();
  t.false(isNaN(org.id));
})

test('we can fetch all members', async (t) => {
  const members = await getMembers();
  t.true(members.length > 0);
})