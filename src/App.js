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
      <span>Ingrese su nombre de usuario:</span>
      <input
        type='text'
      />
    </div>
    <div style={{ marginTop: 5 }}>
      <span>Ingrese su contrasena:</span>
      <input
        type='password'
      />
    </div>
   </div>
  );
}

export default App;
