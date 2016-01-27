if(process.env.NODE_ENV === 'production'){
  // Start prod server
  require('./server')
}else{
  // Start dev server
  require('./bin/server')
}
