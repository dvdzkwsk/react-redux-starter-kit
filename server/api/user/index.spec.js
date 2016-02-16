import proxyquire from 'proxyquire';

proxyquire.noPreserveCache();

const userCtrlStub = {
  index: 'userCtrl.index',
  destroy: 'userCtrl.destroy',
  me: 'userCtrl.me',
  changePassword: 'userCtrl.changePassword',
  show: 'userCtrl.show',
  create: 'userCtrl.create'
};

const authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return 'authService.hasRole.' + role;
  }
};

const routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
const userIndex = proxyquire('./index', {
  'koa-router': () => {
    return routerStub;
  },
  './user.controller': userCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('User API Router:', () => {

  it('should return an express router instance', () => {
    expect(userIndex.default).to.equal(routerStub);
  });

  describe('GET /api/users', () => {

    it('should verify admin role and route to user.controller.index', () => {
      expect(routerStub.get
        .withArgs('/', 'authService.hasRole.admin', 'userCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/users/:id', () => {

    it('should verify admin role and route to user.controller.destroy', () => {
      expect(routerStub.delete
        .withArgs('/:id', 'authService.hasRole.admin', 'userCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/users/me', () => {

    it('should be authenticated and route to user.controller.me', () => {
      expect(routerStub.get
        .withArgs('/me', 'authService.isAuthenticated', 'userCtrl.me')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/users/:id/password', () => {

    it('should be authenticated and route to user.controller.changePassword', () => {
      expect(routerStub.put
        .withArgs('/:id/password', 'authService.isAuthenticated', 'userCtrl.changePassword')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/users/:id', () => {

    it('should be authenticated and route to user.controller.show', () => {
      expect(routerStub.get
        .withArgs('/:id', 'authService.isAuthenticated', 'userCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/users', () => {

    it('should route to user.controller.create', () => {
      expect(routerStub.post
        .withArgs('/', 'userCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

});
