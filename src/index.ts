import app from './App';

const port = 3000; // Todo: Port number should be in separate config file
 
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`);
})

