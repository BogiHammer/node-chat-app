const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Office Fans'
    }, {
      id: '2',
      name: 'Jen',
      room: '24 Fans'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Office Fans'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Benny',
      room: 'Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Office Fans', () => {
    var userList = users.getUserList('Office Fans');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for 24 Fans', () => {
    var userList = users.getUserList('24 Fans');
    expect(userList).toEqual(['Jen']);
  });
});