const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
 });

test('remove user from userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
 });

test("remove user from userController", () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.remove(user);
  expect(userController.getUsers()).not.toContain(user);
 });

test("find user by email", () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  const findUser = userController.findByEmail("santiago@generation.org");
  expect(findUser).toEqual(user);
 });

test("Undefined for unknown user by email", () => {
  const findUser = userController.findByEmail("tiago@generation.org");
  expect(findUser).toBeUndefined();
});

test("find user by id", () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  const findUser = userController.findById(1234)
  expect(findUser).toEqual(user);
 });

test("Undefined for unknown user by id", () => {
  const findUser = userController.findById(2345);
  expect(findUser).toBeUndefined();
 });