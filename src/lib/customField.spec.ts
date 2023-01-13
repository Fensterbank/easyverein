import test from 'ava';
import { setApiToken, setApiVersion } from '.';
import { getMember } from '..';
import { CustomField } from '../types/CustomField';
import { UserCustomField } from '../types/UserCustomField';
import { getCustomFields, updateUserCustomField } from './customfield';

console.log(`Running tests with API token: ${process.env.EASYVEREIN_TOKEN}`);
console.log(
  `Running test for member with member id: ${process.env.TEST_MEMBER_ID}`
);

const TEST_MEMBER_ID: number = Number(process.env.TEST_MEMBER_ID);
const API_TOKEN: string = process.env.EASYVEREIN_TOKEN;

test.serial('we can set token', (t) => {
  t.notThrows(() => setApiToken(API_TOKEN));
});

test.serial('we can set api version to v1.5', (t) => {
  t.notThrows(() => setApiVersion('v1.5'));
});

test.serial('we can get custom fields', async (t) => {
  const fields = await getCustomFields('{id}');
  t.truthy(fields);
});

test('we can set a value for test member', async (t) => {
  // Get Member Data for test
  const member = await getMember(
    TEST_MEMBER_ID,
    '{id,customFields{id,value,customField{id}}}'
  );

  // Check if request was successfull
  t.truthy(member.id);

  // Prepare test data
  const memberCustomField = member.customFields[0];

  const current_value = member.customFields[0].value;
  // ToDo: Find a way to not rely on preset values
  const new_value = 'Ruhend';

  let userCustomField: UserCustomField = {
    value: new_value,
    customField: (<CustomField>memberCustomField.customField).id,
  };

  // Test if data can be changed
  const testCustomFieldSet: Readonly<UserCustomField> =
    await updateUserCustomField(
      TEST_MEMBER_ID,
      memberCustomField.id,
      userCustomField
    );

  t.is(testCustomFieldSet.value, new_value);

  // Revert change
  userCustomField.value = current_value;

  const testCustomFieldRevert: Readonly<UserCustomField> =
    await updateUserCustomField(
      TEST_MEMBER_ID,
      memberCustomField.id,
      userCustomField
    );

  t.is(testCustomFieldRevert.value, current_value);
});
