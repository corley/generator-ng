describe( '<%= controllerName %> section', function() {
  beforeEach( module( '<%= appname %>.<%= controllerNameLower %>' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});

