import Input from './components/input';

function App() {
  return (
    <div className="
      w-screen
      h-screen
      flex
      flex-col
      items-center
      justify-center
      gap-3"
    >
      <Input
        label='Username:'
        name='username'
        placeholder='username'
      />
      <Input
        label='Password:'
        type='password'
        name='password'
        placeholder='password'
      />
    </div>
  );
}

export default App;
