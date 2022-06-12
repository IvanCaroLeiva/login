function App() {
  return (
   <div style={{
      marginTop: 10,
      marginLeft: 10,
      width: 500,
      display: 'flex',
      flexDirection: 'column'
   }}>
    <div>
      <span>Ingrese Usuario qlo:</span>
      <input
        type='text'
      />
    </div>
    <div style={{ marginTop: 5 }}>
      <span>Ingrese Contrasenia el qlo:</span>
      <input
        type='password'
      />
    </div>
   </div>
  );
}

export default App;
