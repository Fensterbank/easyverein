import test from 'ava';
import 'dotenv/config';

import { getMember, getMembers, updateMember } from './member';
import { getOrganization } from './organization';

import { setApiToken } from '.';
import { getInvoice, getInvoices } from './invoice';
import { getBooking, getBookings } from './booking';

// ToDo: Should be splitted up in seperate files to proper test (e.g. getting a valid memberId before the single member tests run, or cleanup the changes made to a member)

console.log(`Running tests with API token: ${process.env.EASYVEREIN_TOKEN}`);

test('we can set token', (t) => {
  t.notThrows(() => setApiToken(process.env.EASYVEREIN_TOKEN));
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
  members.map((m) => {
    t.truthy(m.id);
    t.truthy(m.emailOrUserName);
  });
  t.true(members.length > 0);
});

test('we can fetch all members with only the id', async (t) => {
  const members = await getMembers('{id}');
  // Every member contains the id field, but not the email field
  members.map((m) => {
    t.truthy(m.id);
    t.falsy(m.emailOrUserName);
  });
  t.true(members.length > 0);
});

test('we can fetch a single member by id', async (t) => {
  const id = parseInt(process.env.TEST_MEMBER_ID);
  const member = await getMember(
    id,
    '{id,contactDetails{name, privateEmail},emailOrUserName,membershipNumber,memberGroups}'
  );
  t.is<number>(member.id, id);
  t.truthy(member.membershipNumber);
  t.truthy(member.emailOrUserName);
  t.falsy(member.joinDate);
});

test('we can change the membership number of a single member', async (t) => {
  const id = parseInt(process.env.TEST_MEMBER_ID);
  const randomMembership = (Math.random() * 100).toFixed();
  const member = await updateMember(id, { membershipNumber: randomMembership });
  t.is<number>(member.id, id);
  t.is(member.membershipNumber, randomMembership);
});

test('we can fetch all invoices', async (t) => {
  const invoices = await getInvoices();
  // Ever invoice contains an id and a total price
  invoices.map((inv) => {
    t.truthy(inv.id);
    t.truthy(inv.totalPrice);
  });
  t.true(invoices.length > 0);
});

test('we can fetch all invoices with only the id', async (t) => {
  const invoices = await getInvoices('{id}');
  // Every invoice contains the id field, but not the total price
  invoices.map((inv) => {
    t.truthy(inv.id);
    t.falsy(inv.totalPrice);
  });
  t.true(invoices.length > 0);
});

test('we can fetch a single invoice by id', async (t) => {
  const id = parseInt(process.env.TEST_INVOICE_ID);
  const invoice = await getInvoice(
    id,
    '{id,totalPrice,relatedAddress{id,member{id}},kind}'
  );
  t.is<number>(invoice.id, id);
  t.truthy(invoice.totalPrice);
  t.truthy(invoice.relatedAddress.member.id);
  t.falsy(invoice.org);
});

test('we can fetch all bookings', async (t) => {
  const bookings = await getBookings();
  // Ever booking contains an id and a total price
  bookings.map((b) => {
    t.truthy(b.id);
    t.truthy(b.amount);
  });
  t.true(bookings.length > 0);
});

test('we can fetch all bookings with only the id', async (t) => {
  const bookings = await getBookings('{id}');
  // Every invoice contains the id field, but not the total price
  bookings.map((b) => {
    t.truthy(b.id);
    t.falsy(b.amount);
  });
  t.true(bookings.length > 0);
});

test('we can fetch a single booking by id', async (t) => {
  const id = parseInt(process.env.TEST_BOOKING_ID);
  const booking = await getBooking(
    id,
    '{id,amount,relatedInvoice{id,totalPrice},date}'
  );
  t.is<number>(booking.id, id);
  t.truthy(booking.amount);
  t.truthy(booking.relatedInvoice[0].id);
  t.falsy(booking.org);
});
