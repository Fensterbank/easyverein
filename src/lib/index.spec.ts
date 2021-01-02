import test from 'ava';

import { Client } from '.';

test('client can be initialized', (t) => {
  const client = Client('token');
  t.truthy(client.getMembers);
});
