import proxyquire from 'proxyquire';

proxyquire.noPreserveCache();

const thingCtrlStub = {
  index: 'thingCtrl.index',
  show: 'thingCtrl.show',
  create: 'thingCtrl.create',
  update: 'thingCtrl.update',
  destroy: 'thingCtrl.destroy'
};

const routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
const thingIndex = proxyquire('./index.js', {
  'koa-router': () => {
    return routerStub;
  },
  './thing.controller': thingCtrlStub
});

describe('Thing API Router:', () => {

  it('should return an express router instance', () => {
    expect(thingIndex.default).to.equal(routerStub);
  });

  describe('GET /api/things', () => {

    it('should route to thing.controller.index', () => {
      expect(routerStub.get
        .withArgs('/', 'thingCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/things/:id', () => {

    it('should route to thing.controller.show', () => {
      expect(routerStub.get
        .withArgs('/:id', 'thingCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/things', () => {

    it('should route to thing.controller.create', () => {
      expect(routerStub.post
        .withArgs('/', 'thingCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/things/:id', () => {

    it('should route to thing.controller.update', () => {
      expect(routerStub.put
        .withArgs('/:id', 'thingCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/things/:id', () => {

    it('should route to thing.controller.update', () => {
      expect(routerStub.patch
        .withArgs('/:id', 'thingCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/things/:id', () => {

    it('should route to thing.controller.destroy', () => {
      expect(routerStub.delete
        .withArgs('/:id', 'thingCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
